import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
// An Observable is an array whose items arrive asynchronously all time
import { Observable } from "../../../node_modules/rxjs";
import { ProductService } from "./product.service";

@Component({

    selector: 'pm-products',
    templateUrl: './product.list.component.html',
    styleUrls: ['./product.list.component.css']

})

// We use the 'implements' keyword to implement an Interface
// In this case, we're implementing the OnInit LifeCycle Hook
// In a way, to do some stuff, when the application loads
export class ProductListComponent implements OnInit {

    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage = "";

    private _listFilter: string = "";

    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products: IProduct[] = [];

    // The constructor is a function that is called when the component is first initialized
    constructor(private productService: ProductService) {

    }

    performFilter(filterBy: string): IProduct[] {

        // First, we set the filter variable into lowercase, to 
        // avoid filtering bugs, once that Javascript is case sensitive
        filterBy = filterBy.toLocaleLowerCase();

        /* 
        We use the array.filter() to create a new array with the elements
        that passes by the test defined in the provided function

        Using the ECMA 2015 error syntax to define the filter function

        
        */
        return this.products.filter((product: IProduct) =>
            // First, we convert the product name into lowercase, and then
            // we use indexOf, to look out and see if the product.name index is founded at the product list
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }

    // Method name():return type
    // Whenever the user clicks the button, the property changes
    // and by this, the image will be showed or not
    toggleImage(): void {

        this.showImage = !this.showImage;

    }

    ngOnInit(): void {
        // Calling our getProducts method from the ProductService, to get the products when this component is initialized

        /*
         * Subscribing the returned object, so we can set up the functions that should be called 
         * when the getProducts() returns. 
         * We use the error function, to catch possible errors
         * 
         */
        this.productService.getProducts().subscribe(
            products => {
                this.products = products,
                    this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error

        );

    }

    onRatingClicked(message: string): void {

        this.pageTitle = "Product List: " + message;
    }
}