import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentRequest } from '../../models/component-request';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent  {

	@Input() viewPorts: number[] = [1, 2, 3, 4];
	@Output() createComponent = new EventEmitter<ComponentRequest>();
	public viewPort;
	public componentType: 'button' | 'alert' = 'button';
	public contextType: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';

	public createRequest() {
    const data = {
			viewPort: this.viewPort,
			componentType: this.componentType,
			contextType: this.contextType
		};

    console.log("data", data);
		this.createComponent.emit(data);
	}

}
