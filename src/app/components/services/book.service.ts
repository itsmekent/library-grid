import { Injectable } from "@angular/core";
import { Book } from "../model/book.model";

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private fiction: Book[] = [
        { id: 1, name: 'To Kill a Mockingbird', description: '<strong>AUTHOR:</strong> Harper Lee<br><strong>GENRE:</strong> Fiction<br><strong>RATING:</strong> 4.8', img: 'assets/img/book__img1.jpg' },
        { id: 2, name: 'Pride and Prejudice', description: '<strong>AUTHOR:</strong> Jane Austen<br><strong>GENRE:</strong> Fiction<br><strong>RATING:</strong> 4.7', img: 'assets/img/book__img2.jpg' },
        { id: 3, name: '1984', description: '<strong>AUTHOR:</strong> George Orwell<br><strong>GENRE:</strong> Fiction<br><strong>RATING:</strong> 4.6', img: 'assets/img/book__img3.jpg' },
        { id: 4, name: 'The Great Gatsby', description: '<strong>AUTHOR:</strong> F. Scott Fitzgerald<br><strong>GENRE:</strong> Fiction<br><strong>RATING:</strong> 4.4', img: 'assets/img/book__img4.jpg' },
        { id: 5, name: 'The Catcher in the Rye', description: '<strong>AUTHOR:</strong> J.D. Salinger<br><strong>GENRE:</strong> Fiction<br><strong>RATING:</strong> 4.3', img: 'assets/img/book__img5.jpg' },
    ];

    private nonFiction: Book[] = [
        { id: 1, name: 'Sapiens: A Brief History of Humankind', description: '<strong>AUTHOR:</strong> Yuval Noah Harari<br><strong>GENRE:</strong> Non-Fiction<br><strong>RATING:</strong> 4.6', img: 'assets/img/book__img6.jpg' },
        { id: 2, name: 'Educated', description: '<strong>AUTHOR:</strong> Tara Westover<br><strong>GENRE:</strong> Memoir<br><strong>RATING:</strong> 4.7', img: 'assets/img/book__img7.jpg' },
        { id: 3, name: 'The Immortal Life of Henrietta Lacks', description: '<strong>AUTHOR:</strong> Rebecca Skloot<br><strong>GENRE:</strong> Biography<br><strong>RATING:</strong> 4.6', img: 'assets/img/book__img8.jpg' },
        { id: 4, name: 'Becoming', description: '<strong>AUTHOR:</strong> Michelle Obama<br><strong>GENRE:</strong> Memoir<br><strong>RATING:</strong> 4.8', img: 'assets/img/book__img9.jpg' },
        { id: 5, name: 'The Wright Brothers', description: '<strong>AUTHOR:</strong> David McCullough<br><strong>GENRE:</strong> Biography<br><strong>RATING:</strong> 4.5', img: 'assets/img/book__img10.jpg' }
    ];

    private scienceFiction: Book[] = [
        { id: 1, name: 'Dune', description: '<strong>AUTHOR:</strong> Frank Herbert<br><strong>GENRE:</strong> Science Fiction<br><strong>RATING:</strong> 4.7', img: 'assets/img/book__img11.jpg' },
        { id: 2, name: 'Ender’s Game', description: '<strong>AUTHOR:</strong> Orson Scott Card<br><strong>GENRE:</strong> Science Fiction<br><strong>RATING:</strong> 4.6', img: 'assets/img/book__img12.jpg' },
        { id: 3, name: 'The Martian', description: '<strong>AUTHOR:</strong> Andy Weir<br><strong>GENRE:</strong> Science Fiction<br><strong>RATING:</strong> 4.8', img: 'assets/img/book__img13.jpg' },
        { id: 4, name: 'Neuromancer', description: '<strong>AUTHOR:</strong> William Gibson<br><strong>GENRE:</strong> Cyberpunk<br><strong>RATING:</strong> 4.3', img: 'assets/img/book__img14.png' },
        { id: 5, name: 'Foundation', description: '<strong>AUTHOR:</strong> Isaac Asimov<br><strong>GENRE:</strong> Science Fiction<br><strong>RATING:</strong> 4.5', img: 'assets/img/book__img15.jpg' }
    ];

    getFiction(): Book[] {
        return this.fiction;
    }

    getNonFiction(): Book[] {
        return this.nonFiction;
    }

    getScienceFiction(): Book[] {
        return this.scienceFiction;
    }
}
