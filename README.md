## Những thứ cần xem lại




## Thiết kế database
- chỉ dùng price sau đó dùng discount tính cur_price
- column ram

## useState
- setState(prevState => prevState + 1) có thể chạy nhiều lận, không phụ thuộc vào biếng bên ngoài
- setState(state + 1) thì cũng chỉ chạy một lần dù gọi nhiều lần
- có thể gán initState qua callback

##useEffect
-callback luôn được gọi mội khi component mout

###useEffect(() => {}, [])
- chỉ gọi call back một lần khi component thêm egọilement vào dom
###useEffect(() => {}, [deps])
- gọi call back một lần khi component thêm element vào dom
- gọi callback khi deps they đổi
###useEffect(() => { return() => {} }, [deps])
-clean up function luôn được gọi trước khi component unmout, gọi sau callback
- dọn dẹp cái cũ khi gọi cái mới
