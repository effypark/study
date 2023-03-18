# imgDown script
## windows
```
## download_images.ps1

$urlList = @('https://image.utoimage.com/preview/cp872722/2022/12/202212008462_206.jpg', 'https://img.gigglehd.com/gg/files/attach/images/158/574/893/012/dc95a7ffc9343055033181e57f9c1970.gif', 'https://img2.quasarzone.co.kr/web/editor/1912/1912obj___1728237716.gif', 'https://img2.quasarzone.co.kr/img/data/img/editor/1902/1902___21356459.gif')

$i = 0

foreach ($url in $urlList) {
    $name = 'AS_{0:00}.{1}' -f $i, ($url.Split('.')[-1])
    Invoke-WebRequest -Uri $url -OutFile $name
    $i += 1
}

Write-Host "All images downloaded successfully."
```
\- powershell을 관리자 권한으로 실행합니다.
\- 해당 파일이 저장되어있는 디렉토리로 이동 합니다.
\- 작성한 스크립트를 실행시킵니다.
``` 
./download_images.ps1
````
\- 스크립트가 저장되어 있는 폴더에 이미지가 저장되어집니다.