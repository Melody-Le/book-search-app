const input_image = document.getElementById("input_image");

const offscreen_canvas = new OffscreenCanvas(0, 0);
const offscreen_canvas_context = offscreen_canvas.getContext("2d");

input_image.addEventListener("change", () => {
  var file = input_image.files[0];
  if (file == undefined) return;
  var reader = new FileReader();
  reader.onload = function (event) {
    const reader_image = event.target.result;
    const image = new Image();
    image.onload = function () {
      offscreen_canvas.width = image.width;
      offscreen_canvas.height = image.height;
      offscreen_canvas_context.drawImage(image, 0, 0);
      offscreen_canvas.convertToBlob().then((blob) => {
        Tesseract.recognize(blob, "eng", {
          logger: (m) => console.log(m),
        }).then(({ data: { text } }) => {
          console.log(text);
        });
      });
    };
    image.src = reader_image;
  };
  reader.readAsDataURL(file);
});
