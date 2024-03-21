import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-sign',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sign.component.html',
    styleUrl: './sign.component.css',
  })
export class SignComponent {
    
    selectedFileName: any;
    fileContent: string | ArrayBuffer | null = '';

  //   constructor(private route: ActivatedRoute) {}

  //   ngOnInit(): void {
  //     // Get the PDF data URI from the URL parameter
  //     const pdfDataUri: string | null = this.route.snapshot.queryParamMap.get('pdf');

  //     if (pdfDataUri) {
  //         // Display the PDF in an iframe or handle it as needed
  //         // Example:
  //         const iframe: HTMLIFrameElement = document.createElement('iframe');
  //         iframe.src = pdfDataUri;
  //         document.body.appendChild(iframe);
  //     } else {
  //         console.error('PDF data URI not found in the URL parameter.');
  //     }
  // }
    // selectedFile: any

    onFileSelected(event:any) {
    const selectedFile = event.target.files[0];
    this.selectedFileName = selectedFile ? selectedFile.name : 'No file selected';
    console.log('Selected file:', selectedFile);
    }

    openFile() {
      const inputElement: any = document.getElementById('fileInput');
  
      if (inputElement.files.length === 0) {
          console.log('No file selected');
          return;
      }
  
      // Get the selected file
      const file = inputElement.files[0];
  
      // Use FileReader to read file content
      const fileReader = new FileReader();
      fileReader.onload = () => {
          // Update the selectedFileName to show the file content
          this.selectedFileName = file.name;
          this.fileContent = fileReader.result; // Store the file content
      };
      fileReader.readAsText(file);
  }
//   document.addEventListener('DOMContentLoaded', function () {
//     // Find the button element by its ID
//     const downloadButton = document.getElementById('downloadPdfButton');

//     // Check if the button exists in the DOM
//     if (downloadButton) {
//         // Add a click event listener to the button
//         downloadButton.addEventListener('click', function () {
//             // Call the onPdfDownload() function when the button is clicked
//             onPdfDownload();
//         });
//     }
// });
// Get the PDF data URI from the URL parameter
     

}
  
  