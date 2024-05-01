import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {

  constructor() {    
  }

  ImageHeading : string = "Grow Professionally";
  ImageSlogan : string = "with the Best";
  ImageDescription : string = "In a world filled with opportunities, having a mentor can make all the difference. Explore why people turn to this invaluable resource to unlock their potential.";
  
  imageData = [
    { id: 1, ImageHeading: 'Home Automation',
      ImageSlogan: 'Text for image 1',
      ImageDescription: 'Heehaaaa' },
    { id: 2, ImageHeading: 'AI',
      ImageSlogan: 'Text for image 1',
      ImageDescription: 'AAo padhaaro maare desh m' },
    { id: 3, ImageHeading: 'image1.jpg', 
      ImageSlogan: 'Text for image 1',
      ImageDescription: '' },
    { id: 4, ImageHeading: 'image1.jpg', 
      ImageSlogan: 'Text for image 1',
      ImageDescription: '' },
    { id: 5, ImageHeading: 'image1.jpg', 
      ImageSlogan: 'Text for image 1',
      ImageDescription: '' },
    { id: 6, ImageHeading: 'image1.jpg', 
      ImageSlogan: 'Text for image 1',
      ImageDescription: '' },
  ];
  

  DisplayData(event : any)
  {
    const clickedElement = event.target as HTMLImageElement;
    const id = clickedElement.id;
    console.log("Clicked ID:", id);

    if(clickedElement.id == '1')
    {
      this.ImageHeading = 'Smart Homes Solutions';
      this.ImageSlogan = 'Smart & Secure';
      this.ImageDescription = 'Elevate your home with innovative technology, enhancing security and convenience for a smarter, safer living experience.';
    }
    else if(clickedElement.id == '2')
    {
      this.ImageHeading = 'Computer Optics';
      this.ImageSlogan = '';
      this.ImageDescription = 'Unlock advanced security with our computer vision technology, offering unparalleled surveillance and threat detection.';
    }
    else if(clickedElement.id == '3')
    {
      this.ImageHeading = 'Smart Metering Solutions';
      this.ImageSlogan = 'Smafrt & Efficient';
      this.ImageDescription = 'Energize Your Efficiency: Smart Meters, Smarter Solutions. Monitor, manage, and optimize your energy consumption effortlessly.';
    }
    else if(clickedElement.id == '4')
    {
      this.ImageHeading = 'Virtual Reality';
      this.ImageSlogan = 'Virtual is the new Real';
      this.ImageDescription = 'Step Into Infinite Worlds: Virtual Reality Redefined. Explore, create, and experience without limits.';
    }
    else if(clickedElement.id == '5')
    {
      this.ImageHeading = 'Conected Ecosystem';
      this.ImageSlogan = 'Dive into the world of IoT';
      this.ImageDescription = 'Connect Your World: Embrace the Power of IoT. Seamlessly integrate devices, unlock efficiency, and enhance convenience.';
    }
    else if(clickedElement.id == '6')
    {
      this.ImageHeading = 'Artificial Intelligience';
      this.ImageSlogan = 'Connect with the power of AI';
      this.ImageDescription = 'Unleash the Potential: AI Revolutionizing Tomorrow. Harness the power of artificial intelligence for limitless innovation.';
    }
  }
}
