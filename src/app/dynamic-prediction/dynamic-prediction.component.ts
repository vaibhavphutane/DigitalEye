import { Component, OnInit, ViewChild } from '@angular/core';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

@Component({
  selector: 'app-dynamic-prediction',
  templateUrl: './dynamic-prediction.component.html',
  styleUrls: ['./dynamic-prediction.component.css']
})
export class DynamicPredictionComponent implements OnInit {

  @ViewChild('recordingVideoElement') recordingVideoElement: any;
  @ViewChild('canvasRef') canvasRef: any;
  objects: string[] = [];
  speechTimeOut: any;

  constructor() { }

  ngOnInit(): void {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const webCamPromise = navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: 'environment'
          }
        })
        .then(stream => {
          // window.stream = stream;
          this.recordingVideoElement.nativeElement.srcObject = stream;
          return new Promise((resolve, reject) => {
            this.recordingVideoElement.nativeElement.onloadedmetadata = () => {
              resolve();
            };
          });
        });
      const modelPromise = cocoSsd.load();
      Promise.all([modelPromise, webCamPromise])
        .then(values => {
          this.detectFrame(this.recordingVideoElement.nativeElement, values[0]);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  detectFrame(video, model) {
    model.detect(video).then(predictions => {
      this.renderPredictions(predictions);
      requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    });
  }

  renderPredictions = predictions => {
    const ctx = this.canvasRef.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Font options.
    const font = '16px sans-serif';
    ctx.font = font;
    ctx.textBaseline = 'top';
    predictions.forEach(prediction => {
      this.deboucedTextSpeech(prediction);
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];
      // Draw the bounding box.
      ctx.strokeStyle = '#00FFFF';
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = '#00FFFF';
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });
    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      // Draw the text last to ensure it's on top.
      ctx.fillStyle = '#000000';
      ctx.fillText(prediction.class, x, y);
    });
  }

  deboucedTextSpeech(prediction) {
    if(!this.objects.includes(prediction.class)) {
      this.objects.push(prediction.class); 
    }
    if(this.speechTimeOut) {
      return
    }
    this.speechTimeOut = setTimeout(() => {
      console.log(prediction);

      this.objects.forEach(object => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = object;
        window.speechSynthesis.speak(msg);
      })
      clearTimeout(this.speechTimeOut);
      this.speechTimeOut = undefined;
      this.objects = [];
    }, 5000);
  }

}
