import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AllModules, Module } from "@ag-grid-enterprise/all-modules";
import { ProductService } from 'src/app/services/base/product.service';

@Component({
  selector: "my-app",
  template: `
    <div style="height:500px;width:70vw">
      <ag-grid-angular
        #agGrid
        [enableRtl]="true"
        style="width:100%; height:500px;"
        id="myGrid"
        class="ag-theme-balham ag-rtl"
        [modules]="modules"
        [columnDefs]="columnDefs"
        [masterDetail]="true"
        [detailCellRendererParams]="detailCellRendererParams"
        [detailRowHeight]="detailRowHeight"
        [defaultColDef]="defaultColDef"
        [rowData]="rowData"
        (firstDataRendered)="onFirstDataRendered($event)"
        (gridReady)="onGridReady($event)"
      ></ag-grid-angular>
    </div>
  `
})
export class ProductListComponent {
  private gridApi;
  private gridColumnApi;
  public modules: Module[] = AllModules;

  private columnDefs;
  private detailCellRendererParams;
  private detailRowHeight;
  private defaultColDef;
  private rowData: any;

  constructor(private http: HttpClient, private productService:ProductService) {
    this.columnDefs = [
      {
        headerName: "عنوان محصول",
        field: "productName",
        cellRenderer: "agGroupCellRenderer"
      },
      { field: "categoryId", headerName:"گروه" },
      { field: "price", headerName:"قیمت" }
    ];
    this.detailCellRendererParams = {
      detailGridOptions: {
        columnDefs: [
          { field: "title", headerName:"عنوان ویژگی" },
          { field: "sortOrder", headerName:"الویت" },
        ],
        defaultColDef: {
          editable: true,
          resizable: true
        },
        onFirstDataRendered: function(params) {
          params.api.sizeColumnsToFit();
        }
      },
      getDetailRowData: function(params) {
        params.successCallback(params.data.features);
      }
    };
    this.detailRowHeight = 340;
    this.defaultColDef = {
      editable: true,
      resizable: true
    };
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
    setTimeout(function() {
      params.api.getDisplayedRowAtIndex(1).setExpanded(true);
    }, 0);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = this.productService.getAll();

    // this.http
    //   .get(
    //     "https://raw.githubusercontent.com/ag-grid/ag-grid-docs/latest/src/javascript-grid-master-detail/cell-editing/data/data.json"
    //   )
    //   .subscribe(data => {
    //     this.rowData = data;
    //   });
  }
}