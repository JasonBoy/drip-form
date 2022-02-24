---
id: viewportConfig
name: viewportConfig
---

`viewportConfig`用来配置 **viewport 区域操作栏**（图片红色区域）

<img src="https://img11.360buyimg.com/imagetools/jfs/t1/134505/27/23809/10562/62172e31E7e74b668/3b10505918437cd1.png" alt="操作栏"/>

```tsx
type ViewportConfig = {
	// 是否展示操作栏 默认true
	showActionBar?: boolean
	// 是否展示删除 默认true
	showDeleteIcon?: boolean
}
```

## 例子

```tsx
import React, { memo } from 'react'
import DripFormGenerator from '@jdfed/form-generator'
import '@jdfed/form-generator/dist/index.css'

const App = memo(() => {
	return (
		<DripFormGenerator
			viewportConfig={{
				showActionBar: false,
			}}
		/>
	)
})

App.displayName = 'GeneratorApp'

export default App
```

## 配置预览图

<img src="https://img10.360buyimg.com/imagetools/jfs/t1/110155/24/24411/12251/62172eeaEb6e3bfdc/8ea5da6e962195c0.jpg" alt="showActionBar配置预览"/>