import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent {
  //private apiUrl = 'http://localhost:3000/';
  private selectedFile: File | null = null;
  public result: string = '';
  public my_arr = ["airplane", "car", "bird", "cat", "deer", "dog", "frog", "horse", "ship", "truck"]
  public my_arr_cars = ["audi", "BMW", "Chevrolet", "Dodge", "Ford", "Honda", "Hyundai", "Jeep", "Nissan", "Toyota"]
  //constructor(private http: HttpClient) { }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files?.length) {
      this.selectedFile = inputElement.files[0];
    }
  }
  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
      fetch('http://localhost:3000/', {
        method: 'POST',
        body: formData
      })
        .then(response => response.text())
        .then(text => {
          if (Number(text.split(',')[0]) == 1) {
            this.result = "in the picture we see a car. the type of car is " + this.my_arr_cars[Number(text.split(',')[1])]
          }
          else {
            this.result = "in the picture we see a " + this.my_arr[Number(text.split(',')[0])]
          }

        });
    }
  }

}