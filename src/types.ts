export type Film = {
  _id: { type: Number, required: true, min: 1 },
  size: { type: Number, required: true, min: 1, max: 40 },
  year: { type: Number, required: true, min: 2018 },
  place: { type: String, required: true },
  description: { type: String, minLength: 50, required: true },
  tags: {
    brand: { type: String },
    type: { type: String },
    iso: { type: String },
  },
  photoCover: { type: Number, required: true, min: 1, max: 40 },
  photos: Array<Photo>

};
export type Photo = {
  index: { type: Number, required: true },
  title: String,
  description: String,
  relevance: { type: Number, min: 0, max: 4 },
  film: { type: Number, min: 1, max: 500 }
};