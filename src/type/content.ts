export interface TextType {
  name: string;
  type: string;
  value: string;
  unit: string;
}

export interface ContentType {
  title: string;
  description: string;
  code: any;
  text: TextType[];
}
