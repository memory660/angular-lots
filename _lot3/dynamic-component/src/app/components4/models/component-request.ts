export interface ComponentRequest {
  contextType: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  componentType: 'button' | 'alert' ;
  viewPort: number;
}
