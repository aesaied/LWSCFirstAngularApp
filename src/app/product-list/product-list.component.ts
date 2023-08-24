import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { ProductModel } from '../models/product-model';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false }) datatableElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  products!: ProductModel[];
  constructor(private productService: ProductService, private http: HttpClient) {

  }

  deleteProduct(product: ProductModel) {

    //alert(JSON.stringify(product));

    Swal.fire({
      title: 'Do you want to delete this product?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      //denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {


        this.productService.delete(product.id).subscribe(() => {
          Swal.fire('Deleted!', '', 'success')
          this.reloadData();
        }

        );


      }
    });

  }

  reloadData() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {

      console.log(dtInstance == null);
      console.log(dtInstance);

      dtInstance.draw(true);

    });

    this.productService.getAllProducts().subscribe(

      products => this.products = products

    );
  }
  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(

      products => this.products = products

    );
    var that = this;

    this.dtOptions = {
      serverSide: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.productService.getForDataTable(dataTablesParameters).subscribe(resp => {
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: resp.data             // <-- see here
          });
        });
      },
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'Name',
        data: 'name'
      }, {
        title: 'Description',
        data: 'description'
      },

      {
        title: 'Price',
        data: 'price'
      },

      {

        data: 'id',
        title: 'actions',

        createdCell: function (td, cellData, data, rowIndex, colIndex) {
          var btn = $('<button class="btn btn-danger">Delete</button>');

          btn.click(function () {
            that.deleteProduct(data);

          });

          $(td).append(btn);

        }


      }
      ]
    };



  }

}


