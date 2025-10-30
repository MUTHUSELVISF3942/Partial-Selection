const STATUS_NOT_DELIVERED = [
  'Ready for shipping',
  'In transit',
  'Out for delivery'
];

// ---- Helper: random integer (inclusive) ----
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ---- Helper: random element from array ----
function randChoice(arr) {
  return arr[randInt(0, arr.length - 1)];
}

// ---- Helper: random full name (simple built‑in list) ----
const FIRST_NAMES = [
  'James','Olivia','Liam','Emma','Noah','Ava','Oliver','Sophia','Elijah','Isabella',
  'William','Mia','Benjamin','Charlotte','Lucas','Amelia','Henry','Harper','Alexander','Evelyn'
];
const LAST_NAMES = [
  'Smith','Johnson','Williams','Brown','Jones','Garcia','Miller','Davis','Rodriguez','Martinez',
  'Hernandez','Lopez','Gonzalez','Wilson','Anderson','Thomas','Taylor','Moore','Jackson','Martin'
];
function randomName() {
  return `${randChoice(FIRST_NAMES)} ${randChoice(LAST_NAMES)}`;
}

// ---- Generate a random date in Oct or Nov 2025 ----
function randomOctNovDate() {
  const year = 2025;
  const month = randChoice([9, 10]);           // 9 = Oct, 10 = Nov
  const day   = randInt(1, 28);                // safe up to 28
  return new Date(year, month, day);
}

// ---- Add days to a Date object (returns new Date) ----
function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ---- Helper: random float with 2 decimals ----
function randFloat(min, max, decimals = 2) {
  const factor = Math.pow(10, decimals);
  return (Math.random() * (max - min) + min).toFixed(decimals);
}

// ---- Determine status based on DeliveryDate ----
function getStatus(deliveryDate) {
  // deliveryDate.getMonth() → 0 = Jan … 9 = Oct
  return deliveryDate.getMonth() === 9 ? 'Delivered' : randChoice(STATUS_NOT_DELIVERED);
}

// ------------------------------------------------------------
//  Generate 200 records
// ------------------------------------------------------------
const dataSource = [];
const usedCustIds = new Set();
const usedOrderIds = new Set();
function getFreight(orderDate, deliveryDate) {
  const transitDays = (deliveryDate - orderDate) / (1000 * 60 * 60 * 24);
  const base = transitDays * 8; // ~$8 per day
  const monthFactor = deliveryDate.getMonth() === 10 ? 1.3 : 1.0; // Nov = 30% higher
  const randomAdd = parseFloat(randFloat(15, 80)); // random variation
  const total = (base + randomAdd) * monthFactor;
  return Math.min(Math.max(total, 25), 250).toFixed(2); // clamp $25 – $250
}

for (let i = 1; i <= 200; i++) {
  // ---- CustomerID (CUST‑001 … CUST‑200) ----
  const custId = `CUST-${String(i).padStart(3, '0')}`;
  usedCustIds.add(custId);

  // ---- CustomerName ----
  const custName = randomName();

  // ---- OrderID (ORD‑10001 …) ----
  const orderId = `ORD-${10000 + i}`;
  usedOrderIds.add(orderId);

  // ---- Dates (Oct/Nov 2025 only) ----
  const orderDate    = randomOctNovDate();                                 // placed
  const shippedDate  = addDays(orderDate, randInt(1, 5));                  // 1‑5 days later
  const deliveryDate = addDays(shippedDate, randInt(2, 8));                // 2‑8 days in transit

  // ---- Status ----
  const status = getStatus(deliveryDate);
  const freight = getFreight(orderDate, deliveryDate);

  // ---- Push record (ISO‑8601 YYYY‑MM‑DD strings) ----
  dataSource.push({
    CustomerID:   custId,
    CustomerName: custName,
    OrderID:      orderId,
    OrderDate:    orderDate.toISOString().split('T')[0],
    ShippedDate:  shippedDate.toISOString().split('T')[0],
    DeliveryDate: deliveryDate.toISOString().split('T')[0],
    Status:       status,
    Freight:      freight
  });
}


var data = new ej.data.DataManager({
    url: 'https://ej2services.syncfusion.com/js/hotfix/api/UrlDataSource',
    adaptor: new ej.data.UrlAdaptor()
});
var localColumns = [
    { type: 'checkbox', width: 50 },
    { field: 'CustomerID', visible: false, headerText: 'Customer ID', textAlign: 'Right', width: 120, isPrimaryKey: true },
    { field: 'CustomerName', headerText: 'Customer Name', width: 170 },
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'OrderDate', headerText: 'OrderDate', width: 150, textAlign: 'Right', format: 'yMd' },
    { field: 'ShippedDate', headerText: 'Shipped Date', width: 150, textAlign: 'Right', format: 'yMd' },
    { field: 'DeliveryDate', headerText: 'Delivery Date', width: 150, textAlign: 'Right', format: 'yMd' },
    { field: 'Freight', headerText: 'Freight', width: 150, textAlign: 'Right', format: 'C2' },
    { field: 'Status', headerText: 'Status', width: 150 },
]
var remoteColumns = [
    { type: 'checkbox', width: 50 },
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120, isPrimaryKey: true },
    { field: 'Employees', headerText: 'Employees', width: 150 },
    { field: 'Designation', headerText: 'Designation', textAlign: 'Right', width: 120 },
    { field: 'CurrentSalary', headerText: 'Current Salary', width: 150 },
]
var date1;
var date2;
var date3;
var date4;
var flag = true;
var grid = new ej.grids.Grid({
    dataSource: dataSource,
    allowSorting: true,
    editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
    allowFiltering: true,
    toolbar: ['Search', 'Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    allowGrouping: true,
    pageSettings: {pageSize: 20},
    height: 300,
    filterSettings: { type: 'Menu' },
    allowPaging: true,
    columns: localColumns,
    isRowSelectable: function (data, column) {
        return data.Status !== 'Delivered';
    }
});

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
            grid.allowPaging = true;
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
            grid.changeDataSource(dataSource, localColumns);
            grid.isRowSelectable = function (data, column) {
                return data.Status !== 'Delivered';
            }
            grid.freezeRefresh();

        } else if (dataObject.value === 'remoteData') {
            grid.query = new ej.data.Query().addParams('dataCount', '200');
            grid.changeDataSource(data, remoteColumns)
            grid.isRowSelectable = function (data, column) {
                return data.CurrentSalary > 2500;
            }
            grid.freezeRefresh();
        }
    },
});
dataObject.appendTo('#data');

var persist = new ej.buttons.CheckBox({
    change: function (e) {
        grid.selectionSettings.persistSelection = e.checked;
        grid.freezeRefresh();
    }
});
persist.appendTo('#persist');

