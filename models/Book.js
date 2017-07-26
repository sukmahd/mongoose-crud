'use strict'

const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  isbn: {
    type:String,
    required: true
  },
  title: {
    type:String,
    required: true
  },
  author: {
    type:String,
    required: true
  },
  category: {
    type:String,
    required: true
  },
  stock: {
    type:Number,
    required:true
  }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
