# fix bilibili app download video name

fix bilibili download video direcotry name from bilibili app.
修复哔哩哔哩应用下载视频的文件名乱码，主要用于缓解用手机下载，用电脑看视频的尴尬局面

* will be not available in bilibili app

## usage

copy from `Internal shared storage\Android\data\tv.danmaku.bili\download\` to your pc

`fix-bilibili-download <target directory1>[,<target directory2>,...]`

or

`fix-bilibili-download` for all directories in current direcotry same for `fix-bilibili-download ./*` in bash

## dependency

nodejs >= 8.9

## two typical download file struct 

### one part video

* before
```
19652026/
└── 1
    ├── danmaku.xml
    ├── entry.json
    └── lua.flv720.bili2api.64
        ├── 0.blv
        ├── 0.blv.4m.sum
        └── index.json
```

`fix-bilibili-download 19652026`

* after
```
【动画公司图鉴】快速了解京都动画公司#1：不要小瞧了家庭主妇了啊喂！       
└── 1                                    
    ├── danmaku.xml                      
    ├── entry.json                       
    └── lua.flv720.bili2api.64           
        ├── 0.blv                        
        ├── 0.blv.4m.sum                 
        └── index.json                   
```

### multiple parts

* before

```
s_1381/                     
├── 25685                   
│   ├── danmaku.xml         
│   ├── entry.json          
│   └── lua.flv720.bb2api.64
│       ├── 0.blv           
│       ├── 0.blv.4m.sum    
│       ├── 1.blv           
│       ├── 1.blv.4m.sum    
│       ├── 2.blv           
│       ├── 2.blv.4m.sum    
│       ├── 3.blv           
│       ├── 3.blv.4m.sum    
│       ├── 4.blv           
│       ├── 4.blv.4m.sum    
│       ├── 5.blv           
│       ├── 5.blv.4m.sum    
│       └── index.json      
├── 25686                   
│   ├── danmaku.xml         
│   ├── entry.json          
│   └── lua.flv720.bb2api.64
│       ├── 0.blv           
│       ├── 0.blv.4m.sum    
│       ├── 1.blv           
│       ├── 1.blv.4m.sum    
│       ├── 2.blv           
│       ├── 2.blv.4m.sum    
│       ├── 3.blv           
│       ├── 3.blv.4m.sum    
│       ├── 4.blv           
│       ├── 4.blv.4m.sum    
│       ├── 5.blv           
│       ├── 5.blv.4m.sum    
│       └── index.json      
```

`fix-bilibili-download s_1381`

* after

```
黑礁 第三季 Roberta’s Blood Trail             
├── 1_间接屠杀                               
│   ├── danmaku.xml                      
│   ├── entry.json                       
│   └── lua.flv720.bb2api.64             
│       ├── 0.blv                        
│       ├── 0.blv.4m.sum                 
│       ├── 1.blv                        
│       ├── 1.blv.4m.sum                 
│       ├── 2.blv                        
│       ├── 2.blv.4m.sum                 
│       ├── 3.blv                        
│       ├── 3.blv.4m.sum                 
│       ├── 4.blv                        
│       ├── 4.blv.4m.sum                 
│       ├── 5.blv                        
│       ├── 5.blv.4m.sum                 
│       └── index.json                   
├── 2_一个白领男人的战术                          
│   ├── danmaku.xml                      
│   ├── entry.json                       
│   └── lua.flv720.bb2api.64             
│       ├── 0.blv                        
│       ├── 0.blv.4m.sum                 
│       ├── 1.blv                        
│       ├── 1.blv.4m.sum                 
│       ├── 2.blv                        
│       ├── 2.blv.4m.sum                 
│       ├── 3.blv                        
│       ├── 3.blv.4m.sum                 
│       ├── 4.blv                        
│       ├── 4.blv.4m.sum                 
│       ├── 5.blv                        
│       ├── 5.blv.4m.sum                 
│       └── index.json                   

```

