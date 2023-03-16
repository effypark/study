$urlList = @('https://image.utoimage.com/preview/cp872722/2022/12/202212008462_206.jpg', 'https://img.gigglehd.com/gg/files/attach/images/158/574/893/012/dc95a7ffc9343055033181e57f9c1970.gif', 'https://img2.quasarzone.co.kr/web/editor/1912/1912obj___1728237716.gif', 'https://img2.quasarzone.co.kr/img/data/img/editor/1902/1902___21356459.gif')

$i = 0

foreach ($url in $urlList) {
    $name = 'AS_{0:00}.{1}' -f $i, ($url.Split('.')[-1])
    Invoke-WebRequest -Uri $url -OutFile $name
    $i += 1
}

Write-Host "All images downloaded successfully."