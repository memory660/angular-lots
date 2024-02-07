import { Component, ComponentFactoryResolver, OnInit, ComponentFactory, ViewChildren,	ViewContainerRef,	QueryList,	ComponentRef } from '@angular/core';
import { ComponentRequest } from '../../models/component-request';
import { ButtonComponent } from '../../button/button.component';
import { AlertComponent } from '../../alert/alert.component';

@Component({
  selector: 'app-dynamic-component-creation',
  templateUrl: './dynamic-component-creation.component.html',
  styleUrls: ['./dynamic-component-creation.component.scss']
})
export class DynamicComponentCreationComponent implements OnInit {

	public viewPorts: number[] = [1, 2, 3, 4];
	private buttonFactory: ComponentFactory<ButtonComponent>;
	private alertFactory: ComponentFactory<AlertComponent>;
	private components: ComponentRef<any>[] = [];
	@ViewChildren('componentTarget', {read: ViewContainerRef}) targets: QueryList<ViewContainerRef>;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

	ngOnInit(): void {
		this.buttonFactory = this.componentFactoryResolver.resolveComponentFactory(ButtonComponent);
		this.alertFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
	}

	public addToViewport(request: ComponentRequest): void {
		const factory = request.componentType === 'button' ? this.buttonFactory : this.alertFactory;
		const target = this.targets.toArray()[request.viewPort];
		const componentRef = target.createComponent(factory);
		componentRef.instance.type = request.contextType;                           // accès au composant : componentRef.instance
		componentRef.instance.remove.subscribe(() => componentRef.destroy());       // supprimer le composant quand on clique dessus
		this.components.push(componentRef);
	}
}
