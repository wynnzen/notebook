# css权重

重要性（Importance）-> !important
专用性（Specificity）
源代码次序（Source order）


| 分数 | 条件 |
| --- | --- |
| 1000 | + 1 / 在 style 属性内或在 style标签内 |
| 100 | + 1 / 每个出现的 ID 选择器 |
| 10 | + 1 / 每个出现的 类，伪类或 属性选择器 |
| 1 |  1 / 每个元素选择器或伪元素 |

通用选择器(*), 组合选择器 (+, >, ~, ' ') 和 (:not) 对特异性没有影响。

继承


会继承 - color font-size 等
不继承 - padding margin border background-image 等

