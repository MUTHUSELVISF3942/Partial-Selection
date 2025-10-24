    var largeDataset = [];
    function dataSource() {
        var names = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',
            'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
            'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
            'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
            'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
            'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
            'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
        for (var i = 1; i <= 1000; i++) {
            largeDataset.push({
                'FIELD1': i,
                'FIELD2': 1967 + (i % 10),
                'FIELD3': names[Math.floor(Math.random() * names.length)],
                'FIELD4': Math.floor(Math.random() * 100),
                'FIELD5': Math.floor(Math.random() * 2000),
                'FIELD6': Math.floor(Math.random() * 1000),
                'FIELD7': Math.floor(Math.random() * 100),
                'FIELD8': Math.floor(Math.random() * 10),
                'FIELD9': Math.floor(Math.random() * 10),
                'FIELD10': Math.floor(Math.random() * 100),
                'FIELD11': Math.floor(Math.random() * 100),
                'FIELD12': Math.floor(Math.random() * 1000),
                'FIELD13': Math.floor(Math.random() * 10),
                'FIELD14': Math.floor(Math.random() * 10),
                'FIELD15': Math.floor(Math.random() * 1000),
                'FIELD16': Math.floor(Math.random() * 200),
                'FIELD17': Math.floor(Math.random() * 300),
                'FIELD18': Math.floor(Math.random() * 400),
                'FIELD19': Math.floor(Math.random() * 500),
                'FIELD20': Math.floor(Math.random() * 700),
                'FIELD21': Math.floor(Math.random() * 800),
                'FIELD22': Math.floor(Math.random() * 1000),
                'FIELD23': Math.floor(Math.random() * 2000),
                'FIELD24': Math.floor(Math.random() * 150),
                'FIELD25': Math.floor(Math.random() * 1000),
                'FIELD26': Math.floor(Math.random() * 100),
                'FIELD27': Math.floor(Math.random() * 400),
                'FIELD28': Math.floor(Math.random() * 600),
                'FIELD29': Math.floor(Math.random() * 500),
                'FIELD30': Math.floor(Math.random() * 300),
            });
        }
    }
var gridData = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 1, OrderDate: new Date("2025-07-20"), ShipCountry: 'France', Freight: 32.38, Verified: true },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date("2025-07-20"), ShipCountry: 'Germany', Freight: 11.61, Verified: false },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date("2025-07-20"), ShipCountry: 'Brazil', Freight: 65.83, Verified: true },
    { OrderID: 10251, CustomerID: 'SUPRD', EmployeeID: 3, OrderDate: new Date("2025-07-21"), ShipCountry: 'Belgium', Freight: 45.22, Verified: false },
    { OrderID: 10252, CustomerID: 'CHOPS', EmployeeID: 7, OrderDate: new Date("2025-07-21"), ShipCountry: 'Switzerland', Freight: 23.76, Verified: true },
    { OrderID: 10253, CustomerID: 'RISCU', EmployeeID: 2, OrderDate: new Date("2025-07-22"), ShipCountry: 'Spain', Freight: 58.17, Verified: true },
    { OrderID: 10254, CustomerID: 'BERGS', EmployeeID: 8, OrderDate: new Date("2025-07-22"), ShipCountry: 'Sweden', Freight: 19.45, Verified: false },
    { OrderID: 10255, CustomerID: 'WELLI', EmployeeID: 1, OrderDate: new Date("2025-07-23"), ShipCountry: 'Brazil', Freight: 73.29, Verified: true },
    { OrderID: 10256, CustomerID: 'EASTC', EmployeeID: 5, OrderDate: new Date("2025-07-23"), ShipCountry: 'UK', Freight: 36.12, Verified: false },
    { OrderID: 10257, CustomerID: 'HILAA', EmployeeID: 9, OrderDate: new Date("2025-07-24"), ShipCountry: 'Venezuela', Freight: 81.91, Verified: true },
    { OrderID: 10258, CustomerID: 'LINOD', EmployeeID: 4, OrderDate: new Date("2025-07-24"), ShipCountry: 'Italy', Freight: 27.84, Verified: false },
    { OrderID: 10259, CustomerID: 'CENTC', EmployeeID: 6, OrderDate: new Date("2025-07-25"), ShipCountry: 'Mexico', Freight: 42.67, Verified: true },
    { OrderID: 10260, CustomerID: 'OTTIK', EmployeeID: 3, OrderDate: new Date("2025-07-25"), ShipCountry: 'Germany', Freight: 55.09, Verified: true },
    { OrderID: 10261, CustomerID: 'QUEDE', EmployeeID: 7, OrderDate: new Date("2025-07-26"), ShipCountry: 'Portugal', Freight: 31.23, Verified: false },
    { OrderID: 10262, CustomerID: 'RATTC', EmployeeID: 2, OrderDate: new Date("2025-07-26"), ShipCountry: 'USA', Freight: 48.76, Verified: true },
    { OrderID: 10263, CustomerID: 'ERNSH', EmployeeID: 8, OrderDate: new Date("2025-07-27"), ShipCountry: 'Austria', Freight: 66.43, Verified: true },
    { OrderID: 10264, CustomerID: 'FOLKO', EmployeeID: 1, OrderDate: new Date("2025-07-27"), ShipCountry: 'Sweden', Freight: 29.88, Verified: false },
    { OrderID: 10265, CustomerID: 'BLONP', EmployeeID: 5, OrderDate: new Date("2025-07-28"), ShipCountry: 'France', Freight: 52.34, Verified: true },
    { OrderID: 10266, CustomerID: 'WARTH', EmployeeID: 4, OrderDate: new Date("2025-07-28"), ShipCountry: 'Finland', Freight: 15.67, Verified: false },
    { OrderID: 10267, CustomerID: 'FRANK', EmployeeID: 6, OrderDate: new Date("2025-07-29"), ShipCountry: 'Germany', Freight: 78.12, Verified: true }
];

var data = new ej.data.DataManager({
    url: 'https://ej2services.syncfusion.com/js/hotfix/api/UrlDataSource',
    adaptor: new ej.data.UrlAdaptor()
    });
    dataSource();
var localColumns = [
        { type: 'checkbox', width: 50 },
        { field: 'FIELD1', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true },
        { field: 'FIELD2', headerText: 'Customer ID', width: 150 },
        { field: 'FIELD3', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'FIELD4', headerText: 'Ship City', width: 150 },
        { field: 'FIELD5', headerText: 'Ship Country', width: 150 },
        { field: 'FIELD6', headerText: 'Ship Name', width: 150 },
    ]
var remoteColumns = [
            { type: 'checkbox', width: 50 },
            { field: 'EmployeeID', headerText: 'EmployeeID', textAlign: 'Right', width: 120, isPrimaryKey: true },
            { field: 'Employees', headerText: 'Employees', width: 150 },
            { field: 'Designation', headerText: 'Designation', textAlign: 'Right', width: 120 },
            { field: 'CurrentSalary', headerText: 'Current Salary', width: 150 },
        ]
var grid = new ej.grids.Grid({
  dataSource: largeDataset.slice(0,100),
  allowSorting: true,
  editSettings: {allowAdding: true, allowEditing: true, allowDeleting: true},
  allowFiltering: true,
  toolbar: ['Search', 'Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  allowGrouping: true,
  height: 300,
  allowPaging: true,
  columns: localColumns,
  isRowSelectable: function(data, column){
    return data.FIELD4 > 15;
  }
});
// document.getElementById('btn').addEventListener('click', function(){
  grid.appendTo('#Grid');
var indicatortypes = [
    { id: 'allowPaging', type: 'allowPaging' },
    { id: 'enableVirtualization', type: 'enableVirtualization' },
    { id: 'enableInfiniteScrolling', type: 'enableInfiniteScrolling' },
];
var dropDownListObject = new ej.dropdowns.DropDownList({
    dataSource: indicatortypes,
    width: 200,
    fields: { text: 'type', value: 'id' },
    value: 'allowPaging',
    change: function (e) {
        if (dropDownListObject.value === 'allowPaging') {
            grid.allowPaging =true;
            grid.enableVirtualization = false;
            grid.enableInfiniteScrolling = false;
        } else if (dropDownListObject.value === 'enableVirtualization') {
            grid.enableVirtualization = true;
            grid.allowPaging = false;
            grid.enableInfiniteScrolling = false;
        } else if (dropDownListObject.value === 'enableInfiniteScrolling') {
            grid.enableInfiniteScrolling = true;
            grid.enableVirtualization = false;
            grid.allowPaging = false;
        }
        grid.freezeRefresh();
    },
});
dropDownListObject.appendTo('#property');


var dataType = [
    { id: 'localData', type: 'localData' },
    { id: 'remoteData', type: 'remoteData' },
];
var dataObject = new ej.dropdowns.DropDownList({
    dataSource: dataType,
    width: 200,
    fields: { text: 'type', value: 'id' },
    value: 'localData',
    change: function (e) {
        if (dataObject.value === 'localData') {
            grid.changeDataSource(largeDataset, localColumns)
        } else if (dataObject.value === 'remoteData') {
            grid.query = new ej.data.Query().addParams('dataCount', '100');
           grid.changeDataSource(data, remoteColumns)
           grid.isRowSelectable = function (data, column){
            return data.CurrentSalary > 2500;
           }
        }
    },
});
dataObject.appendTo('#data');

var persist = new ej.buttons.CheckBox({
    change: function(e) {
        grid.selectionSettings.persistSelection = e.checked;
    }
});
persist.appendTo('#persist');
