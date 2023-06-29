# bmap-crack

隐藏百度地图商用授权水印

## 安装

使用 UNPKG

```html
<script src="https://unpkg.com/bmap-crack"></script>
```

自托管

下载 <https://unpkg.com/bmap-crack/bmap-crack.js> 后引用它

```html
<script src="./your-path/bmap-crack.js"></script>
```

使用 npm

```bash
npm install bmap-crack
```

## 使用

全局只需在百度地图 **之前** 导入一次 bmap-cark

推荐使用 **CDN** 或 **自托管** 方式，在百度地图之前引用 bmap-crack

```html
<!-- UNPKG -->
<script src="https://unpkg.com/bmap-crack"></script>
<!-- 自托管 -->
<script src="./your-path/bmap-crack.js"></script>
<!-- 引用百度地图 js 文件 -->
<!-- ... -->
</script>
```

如果百度地图是 **动态导入** 的，同样在百度地图之前导入 bmap-crack

```js
// 导入 bmap-crack
import "bmap-crack";
// 导入百度地图 API
// ...
```
