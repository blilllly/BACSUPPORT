export interface Printer {
  id?: string;
  marca: string;
  modelo: string;
  descrip_corta: string;
  descripcion: string;
  alt_img?: string;
  v_impresion: string;
  dimensiones: string;
  peso: string;
}

export interface Testimony {
  score: number;
  title: string;
  prg: string;
  img: string;
  name: string;
  job: string;
}
