// function calculateRectangleArea (){
//     //get length of the rectangle 
//     const lengthInput = document.getElementById('rectangle-length');
//     const lengthText = lengthInput.value;
//     const length = parseFloat(lengthText)
//     console.log(length);

//     // get width of  the rectangle
//     const widthInput = document.getElementById('rectangle-width');
//     const widthText = widthInput.value;
//     const width = parseFloat(widthText);
//     console.log(width);

//     // calculate rectangle area
//     const area = length * width;
//     console.log('area of the rectangle',area);

//     // display rectangle area
//     const rectangleAreaSpan = document.getElementById('rectangle-area');
//     rectangleAreaSpan.innerText = area;
// }


function calculateParallelogramArea (){
     //get base of the Parallelogram
     const baseInput = document.getElementById('parallelogram-base');
     const baseText = baseInput.value;
     const base = parseFloat(baseText)
     console.log(base);
    

     //get height of the Parallelogram
     const heightInput = document.getElementById('parallelogram-height');
     const heightText = heightInput.value;
     const height = parseFloat(heightText)
     console.log(height);

      // calculate rectangle area
      const area =  0.5 * base * height;
      console.log('area of the parallelogram',area);

      // display parallelogram area
      const parallelogramAreaSpan = document.getElementById('parallelogram-area');
      parallelogramAreaSpan.innerText = area;
}