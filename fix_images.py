from pathlib import Path

path = Path(r'c:\Users\hp\Desktop\cafe-website\Index.html')
text = path.read_text(encoding='utf-8')
replacements = {
    'src="image/menu-page-1.jpg"': 'src="image/IMG-20260815-WA0006.jpg"',
    'src="image/menu-page-2.jpg"': 'src="image/IMG-20260815-WA0055.jpg"',
    'src="image/menu-page-3.jpg"': 'src="image/IMG-20260815-WA0061.jpg"',
    'src="image/menu-page-4.jpg"': 'src="image/IMG-20260815-WA0088.jpg"',
    'src="image/menu-page-5.jpg"': 'src="image/IMG-20260815-WA0092.jpg"',
    'src="image/menu-page-6.jpg"': 'src="image/IMG-20260815-WA0100.jpg"',
    'src="image/menu-page-7.jpg"': 'src="image/IMG-20260815-WA0111.jpg"',
}
for old, new in replacements.items():
    text = text.replace(old, new)
path.write_text(text, encoding='utf-8')
print('remaining stale menu refs:', text.count('menu-page-'))
