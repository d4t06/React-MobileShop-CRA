## falsy
- 0
- ''
- null
- NaN
- undefine



## Thiết kế database
- chỉ dùng price sau đó dùng discount tính cur_price
- column ram

## useState
- setState(prevState => prevState + 1) có thể chạy nhiều lận, không phụ thuộc vào biếng bên ngoài
- setState(state + 1) thì cũng chỉ chạy một lần dù gọi nhiều lần
- có thể gán initState qua callback

##useEffect
-callback luôn được gọi mội khi component mount

###useEffect(() => {}, [])
- chỉ gọi call back một lần khi component thêm element vào dom
###useEffect(() => {}, [deps])
- gọi call back một lần khi component thêm element vào dom
- gọi callback khi deps they đổi
###useEffect(() => { return() => {} }, [deps])
-clean up function luôn được gọi trước khi component unmount, gọi sau callback
- dọn dẹp cái cũ khi gọi cái mới

### Update thứ 5 23/2/2023
- Thêm chức năng search có SetTimeout, thêm overlay
- Thêm SetTimeout cho service
- Thêm prop status cho state
- Filter sẽ không chon được trong lúc lây data

### update thứ 7 25/2/2023
- get One, get ALl sẽ không dispatch mà truyền url parameter

### update thứ 2 27/2/2023
- Thêm com modal

### update thứ 4 29/2/2023
- Sửa lại layout trang product
- SelectedSort tương tác được

### update thứ 5 1/3/2023
- Sửa css DetailProductItem
- Sửa css ProductItem
- Fix không reset index khi chuyển giữa dtdd và laptop
- Thêm transition cho ImageSlider, tự đông next ảnh, sửa css
- Thêm component Button
- issue : Chưa fix được tương tác SelecteSort và filter price

### update thứ 6 2/3/2023
- Đặt sort theo bán chạy nhât sẽ không chuyền param, thêm sort theo trả góp
- filter price tất cả sẽ không truyền paramn
- Fix issue selected sort nhưng chưa xong
- Nếu không có filter thì gía trị là ''
- Thêm input tất cả cho các filter
