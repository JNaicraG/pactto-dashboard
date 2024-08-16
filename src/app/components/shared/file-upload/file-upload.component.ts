import { CssColorsEnum } from './../../../core/types/enums/css-colors.enum';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    ButtonComponent,
    ContainerComponent
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  buttonText:string = 'UPLOAD NEW VIDEO';

  constructor() {
    this.setResponsiveText();
  }

  @HostListener('window:resize')
  onResize() {
    this.setResponsiveText();
  }

  private setResponsiveText() {
    const width = window.innerWidth;
    this.buttonText = width <= 767 ? 'UPLOAD' : 'UPLOAD NEW VIDEO';
  }

  buttonColor: string = CssColorsEnum.ACCENT_BLUE;
  selectedFile: File | null = null;
  videoSrc: string | null = null;
  thumbnailSrc: string | null = null;

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('video', { static: false }) video!: ElementRef<HTMLVideoElement>;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      if (file.type.startsWith('video/')) {
        this.selectedFile = file;
        this.videoSrc = URL.createObjectURL(file);
        this.video.nativeElement.onloadeddata = () => {
          this.captureThumbnail();
        };
        
      } else {
        alert('Please select a valid video file.');
        this.selectedFile = null;
        this.videoSrc = null;
        this.thumbnailSrc = null;
      }
    }
  }

  captureThumbnail(): void {
    const videoElement = this.video.nativeElement;
    const canvasElement = this.canvas.nativeElement;

    // Configure o canvas para o tamanho do vídeo
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;

    // Desenhe o frame do vídeo no canvas
    const context = canvasElement.getContext('2d');
    if (context) {
      context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

      // Gere a URL da thumbnail
      this.thumbnailSrc = canvasElement.toDataURL('image/jpeg');
    }

  }
}

