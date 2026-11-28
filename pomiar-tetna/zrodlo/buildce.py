import json
logo=open('/mnt/project-files/app-prototyp/zrodlo/logo.txt').read().split('\n',1)[1].strip()
t=open('ce.tpl.js').read()
t=t.replace('__CSS__',json.dumps(open('ce_css.css').read())).replace('__HTML__',json.dumps(open('ce_html.html').read())).replace('__DATA__',open('data.json').read()).replace('__LOGO__',json.dumps(logo))
open('measure-my-pause.js','w').write(t)
open('ce-test.html','w').write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>t</title></head><body style="margin:0;background:#FBF9F4"><div style="height:80px;background:#EFEAE1"></div><measure-my-pause></measure-my-pause><script src="measure-my-pause.js"></script></body></html>')
print(len(t))
