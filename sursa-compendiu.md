---
render_with_liquid: false
---
# ALGEBRĂ

**NUMERE REALE**
$\mathbb{N}=\{0,\,1,\,2,\,3,\,...\}$: mulțimea nr. *naturale*
$\mathbb{Z}=\mathbb{N}\cup\{-1,\,-2,\,-3,\,...\}=\{...,\,-3,\,-2,\,-1,\,0,\,1,\,2,\,3,\,...\}$: mulțimea nr. *întregi*
$\mathbb{Q}=\left\{ {\large\frac{a}{b}} \;\middle|\; a, b \in \mathbb{Z},\ b \neq 0 \right\}$: mulțimea nr. *raționale*
$\mathbb{R}\,\setminus\,\mathbb{Q}$: mulțimea nr. *reale*
$\geq$ Orice număr rațional se scrie sub formă de fracție zecimală finită sau infinită periodică, cu perioada diferită de $0$ sau $9$.

**FORMULE DE CALCUL PRESCURTATE**
$a,\,b\in\mathbb{R}$
$(a+b)^2=a^2+2ab+b^2$
$(a-b)^2=a^2-2ab+b^2$
$(a+b)(a-b)=a^2-b^2$
$(a+b+c)^2=a^2+b^2+c^2+2ab+2ac+2bc$
$(a+b)^3=a^3+3a^2b+3ab^2+b^3$
$(a-b)^3=a^3-3a^2b+3ab^2-b^3$
$a^3+b^3=(a+b)(a^2-ab+b^2)$
$a^3-b^3=(a-b)(a^2+ab+b^2)$
$a^n-b^n=(a-b)(a^{n-1}+a^{n-2}\cdot b+a^{n-3}\cdot b^2+...+b^{n-1}),\,(\forall)n\in\mathbb{N}$
$a^{2k+1}+b^{2k+1}=(a+b)(a^{2k}-a^{2k-1}\cdot b+a^{2k-2}\cdot b^2-...+b^{2k}),\,(\forall)k\in\mathbb{N^*}$

**ORDONAREA NR. REALE**
$a<b\,|\cdot c\implies\begin{cases}c>0\implies ac<bc\\c<0\implies ac>bc\end{cases}$
$$m_a=\frac{a_1+a_2+...+a_n}n;\,\,m_h=\frac n{\large\frac{1}{a_1}+\frac{1}{a_2}+...+\frac{1}{a_n}};\,\,m_g=\sqrt[\Large n]{a_1\cdot a_2\cdot...\cdot a_n}$$
$\geq$ Mediile sunt, de la stânga la dreapta: media *aritmetică*, media *armonică* și media
*geometrică*. Pentru $n=2,\,m_h\leq m_g\leq m_a,\,\forall x,\,y>0$.

**INEGALITATEA CAUCHY-BUNIAKOVSKI-SCHWARZ (CBS)**
$(a^2+b^2)(x^2+y^2)\geq(ax+by)^2,\,\forall a,b,x,y\in\mathbb{R}$
$(a^2+b^2)(x^2+y^2)=(ax+by)^2\Longleftrightarrow{\large\frac ax}={\large\frac by},\,x,y\neq0$
$\geq$Generalizare: 
$(a_1^2+a_2^2+...+a_n^2)(b_1^2+b_2^2+...+b_n^2)\geq(a_1b_1+a_2b_2+...+a_nb_n)^2,\,\forall a_1,a_2,...,a_n,b_1,b_2,...,b_n\in\mathbb{R}$
$\geq$ *Inegalitatea Bergrstrom*: 
$$\frac{x^2}a+\frac{y^2}b\geq\frac{(x+y)^2}{a+b}$$
$x^2+y^2+z^2\geq xy+xz+yz,\forall x,y,z\in\mathbb{R}$

**MODULUL UNUI NUMĂR REAL**
$|x|=\begin{cases}x,\,dacă\,x\geq0\\-x,\,dacă\,x\leq0\end{cases}$
$\geq$ Proprietăți:
$|x|\geq0,\forall x\in\mathbb{R}$
$|x|=0\Longleftrightarrow x=0$
$|x\cdot y|=|x|\cdot|y|,\forall x,y\in\mathbb{R}$
${\large|\frac xy|}={\large\frac{|x|}{|y|}},\forall x,y\in\mathbb{R},y\neq0$
$|x+y|\leq|x|+|y|,\forall x,y\in\mathbb{R};\,egalitate\Longleftrightarrow x\,\,și\,\,y\,\,au\,\,același\,\,semn$ $|x|=|-x|,\forall x\in\mathbb{R}$
$|x|=a,a>0\Longleftrightarrow x\in\{-a,a\}$
$|x|\leq a,a>0\Longleftrightarrow -a\leq x\leq a\Longleftrightarrow x\in[-a,a]$ 
$|x|\geq a,a>0\Longleftrightarrow x\leq-a\,\,sau\,\,x\geq a\Longleftrightarrow x\in(-\infty,-a]\cup[a,+\infty)$
$|x|=|y|\Longleftrightarrow a=\pm b$

**PARTEA ÎNTREAGĂ ȘI PARTEA FRACȚIONARĂ A UNUI NR. REAL**
$\geq$ Prin *partea întreagă* a nr. real $x$ înțelegem cel mai mare nr. întreg mai mic-egal decât $x$:
$[x]=k\in\mathbb{Z}\Longleftrightarrow x\in[k,k+1)$.
$\geq$ Proprietăți:
$[x]\in\mathbb{Z},\forall x\in\mathbb{R}$
$[x]=k\in\mathbb{Z}\Longleftrightarrow x\in[k,k+1)$
$[x]=x\Longleftrightarrow x\in\mathbb{Z}$
$[x]\leq x<[x]+1,\forall x\in\mathbb{R}$
$[x+k]=[x]+k,\forall x\in\mathbb{R},k\in\mathbb{Z}$
$\geq$ *Partea fracționară* a unui nr. real $x$ reprezintă diferența dintre $x$ și partea sa întreagă $[x]$: 
$\{x\}=x-[x]$.
$\geq$ Proprietăți:
$0\leq\{x\}<1,\forall x\in\mathbb{R}$
$\{x\}=0\Longleftrightarrow x\in\mathbb{Z}$

**ELEMENTE DE LOGICĂ MATEMATICĂ**
$\geq$ Un enunț despre care putem spune că este adevărat sau fals, dar nu ambele, se numește
*propoziție logică.*
$\geq$ *Valorile de adevăr* sunt *"adevărat" ("A"* sau *"1")* și *"fals" ("F"* sau *"0")*. 
$\geq$ Prin *negația* propoziției logice $p$ înțelegem propoz. notată $\neg p$ sau $\overline p$ numită "$non\,\,p$" care este adevărată când $p$ este falsă și este falsă când $p$ este adevărată. 
$\geq$ *Tabel de adevăr* pentru negația propozițiilor:

| $p$ | $\neg p$ |
| :-: | :------: |
| $1$ |   $0$    |
| $0$ |   $1$    |
$\geq$ *Conjuncția* propozițiilor $p$ și $q$ este propoziția notată "$p\land q$" care este adevărată numai dacă ambele propoziții sunt adevărate.
$\geq$ *Disjuncția* propozițiilor $p$ și $q$ este propoziția notată "$p\lor q$" (citită "$p$ sau $q$") care este adevărată atunci când cel puțin una dintre propozițiile $p$ și $q$ este adevărată.
$\geq$ *Implicația* propozițiilor $p$ și $q$, notată $p\rightarrow q$ sau $(\neg p)\lor q$ , este falsă doar dacă $p$ este adevărată și $q$ falsă.

| $p$ | $q$ | $p\land q$ | **\|\|** | $p$ | $q$ | $p\lor q$ | **\|\|** | $p$ | $q$ | $\neg p$ | $p\rightarrow q$ |
| :-: | :-: | :--------: | :------: | :-: | :-: | :-------: | :------: | :-: | :-: | :------: | :--------------: |
| $1$ | $1$ |    $1$     | **\|\|** | $1$ | $1$ |    $1$    | **\|\|** | $1$ | $1$ |   $0$    |       $1$        |
| $1$ | $0$ |    $0$     | **\|\|** | $1$ | $0$ |    $1$    | **\|\|** | $1$ | $0$ |   $0$    |       $0$        |
| $0$ | $1$ |    $0$     | **\|\|** | $0$ | $1$ |    $1$    | **\|\|** | $0$ | $1$ |   $1$    |       $1$        |
| $0$ | $0$ |    $0$     | **\|\|** | $0$ | $0$ |    $0$    | **\|\|** | $0$ | $0$ |   $1$    |       $1$        |

$\geq$ *Echivalența* propozițiilor $p$ și $q$, notată $p\leftrightarrow q$ sau $(p\rightarrow q)\land(q\rightarrow p)$, este adevărată doar dacă $p$ și $q$ au aceeași valoare de adevăr. ***Observație:*** $(p\leftrightarrow q)\equiv((p\rightarrow q)\land(q\rightarrow p))$, unde $\equiv$ indică *identitatea din punct de vedere logic*.

| $p$ | $q$ | $p\rightarrow q$ | $q\rightarrow p$ | $p\leftrightarrow q$ |
| :-: | :-: | :--------------: | :--------------: | :------------------: |
| $1$ | $1$ |       $1$        |       $1$        |         $1$          |
| $1$ | $0$ |       $0$        |       $1$        |         $0$          |
| $0$ | $1$ |       $1$        |       $0$        |         $0$          |
| $0$ | $0$ |       $1$        |       $1$        |         $1$          |
$\geq$ Prin *formulă propozițională* înțelegem o expresie în care apar mai multe propoziții legate între ele prin *conectori logici*: $\alpha=\alpha(p,\,q,\,r\,...)$, $\beta=\beta(p,\,q,\,r,\,...)$. $\alpha\equiv\beta$ dacă pentru orice înlocuire a propozițiilor cu valori de adevăr cele două formule au aceeași formulă de adevăr. Spre exemplu, $\alpha\equiv\beta$, unde $\alpha$ reprezintă formula $\neg(p\lor q)$ și $\beta$ reprezintă formula $(\neg p)\land(\neg q)$:

| $p$ | $q$ | $p\lor q$ | $\neg(p\lor q)$ | $\neg p$ | $\neg q$ | $(\neg p)\land(\neg q)$ |
| :-: | :-: | :-------: | :-------------: | :------: | :------: | :---------------------: |
| $1$ | $1$ |    $1$    |       $0$       |   $0$    |   $0$    |           $0$           |
| $1$ | $0$ |    $1$    |       $0$       |   $0$    |   $1$    |           $0$           |
| $0$ | $1$ |    $1$    |       $0$       |   $1$    |   $0$    |           $0$           |
| $0$ | $0$ |    $0$    |       $1$       |   $1$    |   $1$    |           $1$           |
$\geq$ O formulă propozițională care este adevărată indiferent de valorile de adevăr ale propozițiilor componente se numește *tautologie* sau *formulă identic adevărată*. De pildă, formula $\alpha\equiv p\lor(\neg  p)$ reprezintă o astfel de tautologie:

| $p$ | $\neg p$ | $p\lor(\neg p)$ |
| :-: | :------: | :-------------: |
| $1$ |   $0$    |       $1$       |
| $0$ |   $1$    |       $1$       |
$\geq$ Un enunț care depinde de una sau mai multe variabile și doar prin înlocuirea variabilelor cu diverse valori devin propoziții logice se numește *predicat*. În funcție de câte variabile apar avem:
1) *predicat unar*: depinde de o singură variabilă: "$P(x)$", $x\in M$ 
2) predicat *binar*:  depinde de două variabile: "$P(x,y)$", $x\in M$
3) predicat *ternar*: depinde de trei variabile: "$P(x,y,z)$", $x\in M$

| $P(x):$ | "$x>3$", $x\in\mathbb{R}$ | **\|\|** | $Q(x,y):$ | "$x\mid y$", $x,y\in\mathbb{N}$ |
| :-----: | :-----------------------: | :------: | :-------: | :-----------------------------: |
| $P(3):$ |            "F"            | **\|\|** | $Q(2,3):$ |               "F"               |
| $P(5):$ |            "A"            | **\|\|** | $Q(3,6):$ |               "A"               |
$\geq$ *Propoziția universală* "$(\forall x)\,P(x)$" este adevărată atunci când $\forall x_0\in M,\,P(x_0)$ este adevărată, unde "$\forall$" se numește *cuantificator universal*. Dacă găsim o singură valoare $\alpha\in M$ astfel încât $P(\alpha)$ este falsă, atunci propoziția universală este falsă și $\alpha$ se numește *contraexemplu*. Exemplu: $\begin{aligned}[t]P(x)&:\,(x^2>0)\,x\in\mathbb{R}\\(\forall x)\,&P(x):\,\forall x\in\mathbb{R},\,x^2>0\,\,\,\text{"F"}\\&P(0):\,0^2>0\,\,\,\text{"F"}\end{aligned}$
$\geq$ *Propoziția existențială* "$(\exists x)\,P(x)$" este adevărată dacă există cel puțin o valoare $x_0\in M$ astfel încât $P(x_0)$ este adevărată. Propoziția existențială este falsă dacă $\forall x_0\in M$ $P(x_0)$ este falsă, unde  "$\exists$ " se numește *cuantificator existențial*. Exemplu: $\begin{aligned}[t](\exists x)\,\text{"}x^2>0\text{"}\,x\in\mathbb{R}\,\,\,\text{"A"}\\ P(1):\,1^2>0\,\,\,\text{"A"}\end{aligned}$
**INDUCȚIA MATEMATICĂ**
$\geq$ Fie $P(n)$ o propoziție care depinde de un număr natural $n$. Dacă propoziția $P(0)$ este adevărată și din $P(k)$ adevărată, $k\in\mathbb{N}$ oarecare rezultă $P(k+1)$ adevărată atunci $P(n)$ este adevărată $\forall n\in\mathbb{N}$.
$\geq$ Fie $P(n)$ o propoziție care depinde de $n\in\mathbb{N},\,n\geq m$. Această metodă presupune două etape:
1) verificăm dacă $P(m)$ este $\text{"A"}$
2) presupunem că $P(k)$ este $\text{"A"},\,k\in\mathbb{N},\,k\geq m,\text{ oarecare}$ și demonstrăm $P(k+1)$ este $\text{"A"}$
Dacă ambele etape au loc atunci $P(n)\text{ "A"}\,\,\forall n\geq m$.
$\geq$ Se definesc următoarele notații: $$\frac{1}{1\cdot 4}+\frac{1}{4\cdot 7}+...+\frac{1}{(3n-2)(3n+1)}=\sum_{\large k=1}^{\large n} \frac{1}{(3k-2)(3k+1)}\,\,\,\text{ și }\,\,\,1^2\cdot 2^2\cdot 3^2\cdot...\cdot n^2=\prod_{\large k=1}^{\large n} k^2,$$
unde operatorul $\Sigma$ indică "sumă pentru $k$ de la $1$ la $n$" și operatorul $\Pi$ indică "produs pentru $k$ de la $1$ la $n$".

**ȘIRURI DE NUMERE REALE**
$\geq$ O *funcție* este notată $f:A\rightarrow B;\,\forall x\in A\,\,\exists f(x)\in B\text{ unic}$, unde $A$ se numește *domeniu de definiție*, $B$ *codomeniu* sau *mulțimea imaginilor* și $f(x)$ *imaginea lui $x$ prin funcția $f$*.
$\geq$ O funcție $f:\mathbb{N}_k\rightarrow\mathbb{R}$ se numește *șir de numere reale*, unde $\mathbb{N}_k=\{n\in\mathbb{N}\,|\,n\geq k,\,k\geq\mathbb{N}\}$. $\forall n\in\mathbb{N},\,n\geq k\rightarrow f(n)\in\mathbb{R}\text{ unic}$, unde $f(n)=a_n\in\mathbb{R}$ se numește *termenul de rang $n$ al șirului*. ***Observație:*** orice șir are o infinitate de termeni. Un șir poate fi definit prin unul dintre următoarele trei moduri:
1) prin *enumerare*
2) cu ajutorul unei *formule* sau a mai multor formule, unde formula reprezintă o legătură dintre rang și valoare: $b_n={\large\frac{2n-1}{2n+1}},\forall n\in\mathbb{N}^*$ (de exemplu).
3) printr-o *relație de recurență*, unde relația de recurență reprezintă o legătură între doi sau mai mulți termeni consecutivi ai șirului: $f_n=f_{n-1}+f_{n-2},\,\forall n\geq 2$ (de exemplu).

$\geq$ Spunem că șirul $(a_n)_{n\geq 1}$ este:
1) *strict crescător* dacă $a_n<a_{n+1}\,\forall n\in\mathbb{N}^*$
2) *crescător* dacă $a_n\leq a_{n+1},\,\forall n\in\mathbb{N}^*$
3) *strict descrescător* dacă $a_n>a_{n+1},\,\forall n\in\mathbb{N}^*$
4) *descrescător* dacă $a_n\geq a_{n+1}\,\forall n\in\mathbb{N}^*$

$\geq$ Un șir $(a_n)_{n\geq 1}$ se numește *mărginit* dacă $\exists a,b\in\mathbb{R},\,a<b$ astfel încât $a\leq a_n\leq b,\,\forall n\in\mathbb{N}^*$, unde $a$ se numește *margine inferioară* și $b$ *margine superioară*.
$\geq$ Un șir în care fiecare termen începând cu al doilea se obține din cel anterior prin adunarea aceluiași număr real numit *rație* se numește *progresie aritmetică*: $a_n=a_{n-1}+r,\,\forall n\geq 2$. Formula pentru termenul de rang $n$ al unei progresii aritmetice în funcție de rația $r$ și primul termen $a_1$ este următoarea: $a_n=a_1+(n-1)r$. ***Observație:*** o progresie aritmetică este unic determinată de primul său termen și de rație.
$\geq$ Spunem că numerele reale $x_1,x_2,...,x_n$ sunt în progresie aritmetică dacă sunt termeni consecutivi ai unei progresii aritmetice: $\div\,x_1,x_2,...,x_n$.
$\geq$ Un șir $(a_n)_{n\geq 1}$ este progresie aritmetică dacă și numai dacă fiecare termen începând cu al doilea este media aritmetică a termenilor vecini lui:
$\geq$ Notăm suma primilor $n$ termeni ai unei progresii aritmetice astfel: $S_n=a_1+a_2+...+a_n,\,n\in\mathbb{N}^*$ Suma aceasta se calculează folosind următoare formulă:$$a_n=\frac{a_{n-1}+a_{n+1}}{2},\,\forall n\geq 2;\,\,\,\,S_n=\frac{(a_1+a_n)n}{2}$$
***Observație:*** în orice progresie aritmetică suma termenilor extremi este constantă: $a_1+a_n=a_2+a_{n-1}=...=a_k+a_{n+1-k}$.
$\geq$ Un șir în care primul termen este nenul și fiecare termen începând cu al doilea se obține din cel anterior prin înmulțire cu același număr real nenul se numește *progresie geometrică*: $(b_n)_{n\geq 1}\text{ prog. geometrică}\Longleftrightarrow b_n=b_{n-1}\cdot q,\,\forall n\geq 2,\,n\in\mathbb{N}$. Numărul real $q$ cu care înmulțim se numește *rația* progresiei. ***Observație:*** $(b_n)_{n\geq 1}\text{ prog. geometrică}\Longleftrightarrow b_n=\sqrt{b_{n-1}\cdot b_{n+1}},\,b_n>0\,\text{ sau }\,b_n^2=b_{n-1}\cdot b_{n+1},\,b_n\in\mathbb{R}$.
$\geq$ Un șir cu termeni pozitivi este progresie geometrică dacă și numai dacă fiecare termen începând cu al doilea este media geometrică a vecinilor săi.
$\geq$ Spunem că numerele reale $x_1,x_2,...,x_n$ se află în progresie geometrică dacă sunt termeni consecutivi ai progresiei (nu neapărat primii): $\text{∺ }x_1,x_2,...,x_n$.
$\geq$ Suma primilor $n$ termeni ai unei progresii geometrice poate fi calculată folosind următoarea formulă:$$S_n=b_1\cdot\frac{q^n-1}{q-1},\,q\neq1\,\text{ sau }\,S_n=b_1\cdot n,\,q=1$$

**PROPRIETĂȚILE GENERALE ALE FUNCȚIILOR**
$\geq$ Amintim notația și definiția unei funcții: $f:A\rightarrow B\implies\forall x\in A\,\,\exists f(x)\in B$, unde $A$ se numește domeniu de definiție și $B$ codomeniu sau *domeniu de valori*. *Graficul* funcției $f$ reprezintă mulțimea $G_f=\{(x,(f(x))\,|\,x\in A\}$. Dacă punctul $(x,y)\in G_f$, atunci $f(x)=y$. Numărul de funcții $f:A\rightarrow B$ este $(\text{card B})^{\text{card A}}$.
$\geq$ Funcția $g:A\rightarrow\mathbb{R},\,g(x)=f(x)\,\,\forall x\in A$ se numește *restricție* a funcției $f$ și se notează $f|_A$. Funcția $f$ se numește *prelungire* a funcției $g$.
$\geq$ Fie *funcția numerică* $f:D\rightarrow\mathbb{R},\,D\subset\mathbb{R}$ și $A\subseteq D$: dacă $A\subset D,\,f(A)=\{f(x)\,|\,x\in A\}$ se numește *imaginea* mulțimii $A$ prin $f$; dacă $A=D,\,Im\,f=\{f(x)\,|\,x\in D\}$ se numește *imaginea* funcției $f$.
$\geq$ Spunem că o funcție $f:D\rightarrow\mathbb{R}$ este *mărginită* dacă $Im\,f\subset[a,b],\,a,b\in\mathbb{R}$. ***Observație:*** o funcție trebuie să aibă ambele margini pentru a fi mărginită.

**FUNCȚIA DE GRADUL I**
$\geq$ Funcția $f:\mathbb{R}\rightarrow\mathbb{R},\,f(x)=ax+b$, unde $a,b\in\mathbb{R}$ se numește *funcție  afină*. Dacă $a\neq 0$, atunci funcția $f$ se numește *funcție de gradul I*. Dacă $a=0$, atunci $f:\mathbb{R}\rightarrow\mathbb{R},\,f(x)=b\in\mathbb{R}$ se numește *funcție constantă*. ***Observație:*** graficul funcției afine (constantă sau de gradul I) este o dreaptă.
$\geq$ O mulțime $D\subseteq\mathbb{R}$ se numește *simetrică față de origine* dacă $\forall x\in D\implies -x\in D$.
$\geq$ Fie $D\subseteq\mathbb{R}$ o mulțime simetrică față de origine. Spunem că o funcție $f:D\rightarrow\mathbb{R}$ este funcție *pară* dacă $f(x)=f(-x),\,\forall x\in D$ sau funcție *impară* dacă $f(-x)=-f(x),\forall x\in D$.  
$\geq$ Două puncte $A$ și $B$ sunt simetrice față de un punct $M$ dacă are loc relația $MA\equiv MB,\,M\in(AB)$. Două puncte $A$ și $B$ sunt simetrice față de o dreaptă $d$ dacă $AB\perp d,\,AB\cap d=\{M\}$ și $MA\equiv MB$.
$\geq$ Spunem că graficul funcției $f$ este *simetric* față de dreapta de ecuație $x=a$ dacă $f(a-x)=f(a+x),\,\forall x\in D$, unde dreapta $x=a$ se numește *axă de simetrie*. ***Observație:*** $f:D\rightarrow\mathbb{R}\text{ funcție pară}\Longleftrightarrow\begin{aligned}[t]&f(-x)=f(x),\,\forall x\in D\\ &f(0-x)=f(0+x),\,x\in D\\ &\text{dreapta x=0 (axa Oy) axă de simetrie.}\end{aligned}$
$\geq$ Spunem că graficul funcției $f$ este simetric față de punctul $P(a,b)$ dacă $f(a-x)+f(a+x)=2b,\,\forall x\in D$. Punctul $P$ se numește *centru de simetrie*. ***Observație:*** $f:D\rightarrow\mathbb{R}\text{ funcție impară}\Longleftrightarrow\begin{aligned}[t]&f(-x)=-f(x),\,\forall x\in D\\ &f(-x)+f(x)=0\\ &\frac{f(0-x)+f(0+x)}{2}=0\\ &O(0,0)\text{ centru de simetrie.}\end{aligned}$
$\geq$ Fie $f:D\rightarrow\mathbb{R},\,D\subset\mathbb{R}$ (funcție numerică). Spunem că funcția $f$ este:
1) *strict crescătoare* pe $D$ dacă $\forall x_1,x_2\in D,\,x_1<x_2\implies f(x_1)<f(x_2)$
2) *strict descrescătoare* pe $D$ dacă $\forall x_1,x_2\in D,\,x_1<x_2\implies f(x_1)>f(x_2)$
3) *strict monotonă* pe $D$ dacă este strict crescătoare sau strict descrescătoare
4) *crescătoare* $(\nearrow)$ pe $D$ dacă $\forall x_1,x_2\in D,\,x_1<x_2\implies f(x_1)\leq f(x_2)$
5) *descrescătoare* $(\searrow)$ pe $D$ dacă $\forall x_1,x_2\in D,\,x_1<x_2\implies f(x_1)\geq f(x_2)$
6) *monotonă* pe $D$ dacă este crescătoare sau descrescătoare

$\geq$ $\text{Fie }x_1,x_2\in\mathbb{R},\,x_1<x_2$
$f(x_1)-f(x_2)=x_1^2-x_2^2=(x_1-x_2)(x_1+x_2)$
$\text{dacă }x_1,x_2\in[0,+\infty)\implies\begin{aligned}[t]&f(x_1)-f(x_2)<0\\ &f(x_1)<f(x_2)\\ &f\text{ strict }\nearrow\text{ pe }[0,+\infty)\end{aligned}$
$\text{dacă }x_1,x_2\in(-\infty,0)\implies\begin{aligned}[t]&f(x_1)-f(x_2)>0\\ &f(x_1)>f(x_2)\\ &f\text{ strict }\searrow\text{ pe }(-\infty,0),\end{aligned}$ 
unde $[0,+\infty)$ și $(-\infty,0]$ se numesc *intervale de monotonie*.
$\geq$ Se definesc următoarele funcții: $\max(a,b)\left\{\begin{aligned} &a,\,a\geq b \\ &b,\,a<b \end{aligned}\right.$ , și $\min(a,b)\left\{\begin{aligned}a,\,a\leq b\\ b,\,a>b\end{aligned}\right.$.
$\geq$ Dacă o funcție este monotonă pe o mulțime atunci ea are aceeași monotonie pe orice submulțime a mulțimii date: $\begin{aligned}&f:D\rightarrow\mathbb{R},\,D\subseteq\mathbb{R}\\ &\text{presupunem }f\text{ strict }\nearrow\text{ pe }D\Longleftrightarrow\forall x_1,x_2\in D,\,x_1<x_2\implies f(x_1)<f(x_2)\\ &A\subset D\,\,\,\text{fie }x_1,x_2\in A,\,x_1<x_2\implies x_1,x_2\in D\implies f(x_1)<f(x_2).\end{aligned}$ 
Reciproca afirmației anterioare este, în general, ***falsă***.
$\geq$ Dacă funcția $f:\mathbb{R}\rightarrow\mathbb{R},\,f(x)=\begin{cases} f_1(x),x\leq a \\ f_2(x),\,x>a\end{cases}$ este strict $\nearrow$ pe $(-\infty,a]$ și pe $(a,+\infty)$ trebuie să aibă loc și relația $f_1(a)\leq f_2(a)$ astfel încât $f$ să fie strict $\nearrow$ pe $\mathbb{R}$. Analog, dacă $f$ este strict $\searrow$ pe $(-\infty,a]$ și pe $(a,+\infty)$ trebuie să aibă loc și relația $f_1(a)\geq f_2(a)$ astfel încât $f$ să fie strict $\searrow$ pe $\mathbb{R}$.
$\geq$ Fie $f:D\rightarrow\mathbb{R},\,D\subset\mathbb{R}$. Spunem că $f$ este periodică dacă $\exists T\in\mathbb{R},\,T\neq 0$ cu proprietatea $f(x+T)=f(x),\,\forall x\in D$. Numărul real $T\neq 0$ se numește *perioadă* a funcției $f$. ***Observație:*** dacă o funcție are o perioadă atunci ea are o infinitate de perioade: $f(x+kT)=f(x),\,\forall x\in D,\,\forall k\in\mathbb{Z}^*$.
$\geq$ Dacă $T\neq 0$ este o perioadă a funcției $f$ atunci numerele $kT,\,k\in\mathbb{Z}^*$ sunt perioade ale funcției $f$, adică $f$ admite o infinitate de perioade. Dacă există, cea mai mică perioadă strict pozitivă se numește *perioadă principală*. 
$\geq$ Fie funcțiile $f,g:D\rightarrow\mathbb{R},\,D\subset\mathbb{R}\text{ (numerice)}$. Se definesc următoarele *operații cu funcții*:
1) adunarea: $f+g:D\rightarrow\mathbb{R},\,(f+g)(x)=f(x)+g(x),\,\forall x\in D$, unde $(f+g)(x)$ reprezintă *funcția sumă*
2) produsul: $f\cdot g:D\rightarrow\mathbb{R},\,(f\cdot g)(x)=f(x)\cdot g(x),\,\forall x\in D$, unde $(f\cdot g)(x)$ reprezintă *funcția produs*
3) împărțirea: ${\large\frac fg}:D_1\rightarrow\mathbb{R},\,\left({\large\frac fg}\right)(x)={\large\frac{f(x)}{g(x)}},\,\forall x\in D$, unde $\left({\large\frac fg}\right)(x)$ reprezintă *funcția cât* și $D_1=\{x\in D\,|\,g(x)\neq 0\}$

$\geq$ Dacă  $f:A\rightarrow B,\,g:B\rightarrow C$ prin *compunerea* funcțiilor $g$ și $f$ înțelegem funcția notată $g\circ f$ cu proprietățile: $\begin{aligned}[t] &g\circ f:A\rightarrow C \\ &(g\circ f)(x)=g(f(x)),\,\forall x\in A.\end{aligned}$ ***Observații:*** $g\circ f$ are sens $\Longleftrightarrow$ domeniul de definiție al lui $g$ coincide cu codomeniul lui $f$; suma a două funcții strict crescătoare/descrescătoare este o funcție strict crescătoare/descrescătoare; compunerea a două funcții de aceeași monotonie este o funcție strict crescătoare; compunerea a două funcții de monotonii diferite este o funcție strict descrescătoare. În general, compunerea funcțiilor ***nu*** este comutativă. Compunerea funcțiilor este, în schimb, asociativă: $A\overset{f}\longrightarrow B\overset{g}\longrightarrow C\overset{h}\longrightarrow D\implies\begin{aligned} &h\circ(g\circ f):A\rightarrow D \\ &(h\circ g)\circ f:A\rightarrow D.\end{aligned}$
Altfel spus, $(h\circ g)\circ f=h\circ(g\circ f)$.
$\geq$ Funcția $1_A:A\rightarrow A,\,1_A(x)=x,\,\forall x\in A$ se numește *funcția identică* a mulțimii $A$: $\begin{aligned}&1_{\mathbb{N}}:\mathbb{N}\rightarrow\mathbb{N},\,1_{\mathbb{N}}(n)=n,\,\forall n\in\mathbb N \\ &A\overset{1_A}\longrightarrow A\overset{f}\longrightarrow B \\ &(f\circ 1_A)(x)=f(1_A(x))=f(x)\implies f\circ 1_A=f\,\,\text{ element neutru la dreapta} \\ &A\overset{f}\longrightarrow B\overset{1_B}\longrightarrow B \\ &(1_B\circ f)(x)=1_B(f(x))=f(x)\implies1_B\circ f=f\,\,\text{ element neutru la stânga}\end{aligned}$

**FUNCȚIA DE GRADUL II**
$\geq$ O ecuație de forma $ax^2+bx+c=0\,\,(1)$ unde $a,b,c\in\mathbb{R},\,a\neq 0$ se numește *ecuație de gradul al doilea*. Numerele reale $a,b,c$ se numesc *coeficienți* ai ecuației, iar $x$ se numește *necunoscută*.
$\geq$ Prin *soluție* a ecuației $(1)$ înțelegem un nr. real $\alpha$ cu proprietatea $a\alpha^2+b\alpha+c=0$.
$\geq$ *Rezolvarea* ecuației de gradul II presupune aflarea *rădăcinilor* $x_1,x_2$ folosind formula $x_{1,2}={\large\frac{-b\pm\sqrt{\Delta}}{2a}}$, unde $\Delta$ se numește *discriminant* și are formula $\Delta=b^2-4ac$. În funcție de semnul lui delta ($\Delta$), soluțiile oricărei ecuații aparțin unuia dintre următoarele trei cazuri:
1) două soluții reale: $\Delta>0\implies x_1,x_2\in\mathbb{R},\,x_1\neq x_2$
2) o soluție reală/două soluții reale identice: $\Delta=0\implies x_1,x_2\in\mathbb{R},\,x_1=x_2=-{\large\frac b{2a}}$
3) nicio soluție reală: $\Delta<0\implies x_1,x_2\notin\mathbb{R}$

$\geq$ Dacă $x_1,x_2$ sunt rădăcinile (soluțiile) ecuației $(1)$ atunci au loc următoarele relații (cunoscute și ca *relațiile lui Viete*): $S=x_1+x_2=-{\large\frac ba},\,P=x_1\cdot x_2={\large\frac ca}$. Dacă $x_1,x_2\in\mathbb{R}$ și $S=x_1+x_2,\,P=x_1x_2$ atunci ecuația $x^2-Sx+P=0$ are ca soluții reale pe $x_1$ și $x_2$. ***Observații:*** $x_1^2+x_2^2=S^2-2P,\,x_1^3+x_2^3=S(S^2-3P)$. 
$\geq$ O expresie de forma $ax^2+bx+c,\,a,b,c\in\mathbb{R},\,a\neq 0$ se numește *trinom de gradul al doilea*. Dacă $a,b,c\in\mathbb{R},\,a\neq 0$ și $x_1,x_2\in\mathbb{R}$ sunt rădăcinile ecuației $ax^2+bx+c=0$ atunci $ax^2+bx+c=a(x-x_1)(x-x_2)$.
$\geq$ Funcția $f:\mathbb{R}\rightarrow\mathbb{R},\,f(x)=ax^2+bx+c,\,a,b,c\in\mathbb{R},\,a\neq 0$ se numește *funcție de gradul al doilea*. Ecuația $ax^2+bx+c=0$ se numește *ecuație asociată* funcției de gradul II. Orice funcție de gradul II admite o *formă canonică*:$$f(x)=a\left(x+\frac b{2a}\right)^2+\frac{-\Delta}{4a}$$
$\geq$ Fie $f:D\rightarrow\mathbb{R},\,D\subseteq\mathbb{R}$. Spunem că $x_0\in D$ este un punct de *minim (maxim)* al funcției $f$ dacă $f(x)\geq f(x_0),\,\forall x\in D\,\,\,(f(x)\leq f(x_0),\,\forall x\in D)$. Numărul $f(x_0)$ se numește *valoare minimă (maximă)* a funcției $f$.
$\geq$ Fie $f:\mathbb{R}\rightarrow\mathbb{R},\,f(x)=ax^2+bx+c,\,a,b,c\in\mathbb{R},\,a\neq 0$:
1) dacă $a>0$ atunci funcția $f$ are minim $x_{min}=-{\large\frac b{2a}}$ este punctul minim și $f(x)_{min}=-{\large\frac\Delta{4a}}$ este valoarea minimă a funcției
2) dacă $a<0$ atunci funcția $f$ are maxim, $x_{max}=-{\large\frac b{2a}}$ este punctul de maxim și $f(x)_{max}=-{\large\frac\Delta{4a}}$ este valoarea maximă a funcției

***Observații:*** $\begin{aligned}[t]&a>0\implies f(x)_{min}=-\frac \Delta{4a}\implies Im\,f=\left[-\frac \Delta{4a},+\infty\right) \\ &a<0\implies f(x)_{max}=-\frac \Delta{4a}\implies Im\,f=\left(-\infty,-\frac \Delta{4a}\right] \\ &x=-\frac b{2a}\text{ este axa de simetrie a }G_f\end{aligned}$
$\geq$ Graficul funcției de gradul al doilea este o curbă numită *parabolă*. Punctul $V\left(-{\large\frac b{2a}},-{\large\frac \Delta{4a}}\right)$ se numește *vârful* parabolei. Graficul se intersectează ***tot timpul*** cu axa $Oy$ în punctul de coordonate $(0,f(0))$, iar intersecția cu axa $Ox$ acceptă ***trei cazuri:***
1) $\Delta<0:$ ecuația nu are soluții în $\mathbb{R}\implies G_f\cap Ox=\varnothing$
2) $\Delta=0:$ $x_1=x_2=-{\large\frac b{2a}}\implies G_f\cap Ox=V\left(-{\large\frac b{2a}},0\right)$, axa $Ox$ este ***tangentă*** la parabolă
3) $\Delta>0:$ $x_{1,2}={\large\frac{-b\pm\sqrt{\Delta}}{2a}},\,x_1\neq x_2\implies G_f\cap Ox=\{A(x_1,0),\,B(x_2,0)\}$ 

***Observație:*** calculăm imaginile unor valori de o parte și de alta a vârfului pentru a desena parabola cât mai exact.
$\geq$ Dacă $a>0$ atunci funcția $f$ este strict descrescătoare pe $\left(-\infty,-{\large\frac b{2a}}\right]$ și strict crescătoare pe $\left[-{\large\frac b{2a}},\,+\infty\right)$. Dacă $a<0$ atunci funcția $f$ este strict crescătoare pe $\left(-\infty,-{\large\frac b{2a}}\right]$ și strict descrescătoare pe $\left[-{\large\frac b{2a}},+\infty\right)$. ***Observație:*** $f$ (orice funcție de gradul II) nu este monotonă pe $\mathbb{R}$.
$\geq$ *A stabili semnul funcției $f$* înseamnă a determina intervalele pe care funcția este positivă sau negativă. Intervalele acestea sunt dependente de semnul lui $\Delta$  și al lui $a$ după cum urmează:
1) $\Delta<0$: $\begin{aligned}[t] &a>0\implies f(x)>0,\,\forall x\in\mathbb{R} \\ &a<0\implies f(x)<0,\,\forall x\in\mathbb{R} \end{aligned}$
2) $\Delta=0$: $\begin{aligned}[t] &a>0\implies f(x)\geq 0,\,\forall x\in\mathbb{R} \\ &a<0\implies f(x)\leq 0,\,\forall x\in\mathbb{R} \end{aligned}$
3) $\Delta>0$: $\begin{aligned}[t] &x\in(-\infty,x_1)\cup(x_2,+\infty) \\ &a>0\implies f(x)>0 \\ &a<0\implies f(x)<0\end{aligned}$

$\geq$ Semnul unei funcții de gradul I urmează următoarele reguli: $\begin{aligned}[t] &x\in\left(-\infty,-\frac ba\right)\implies f(x)\text{ are semnul opus lui }a \\ &x\in\left(-\frac ba,+\infty\right)\implies f(x)\text{ are semnul lui }a \\ &x=-\frac ba\implies f(x)=0\end{aligned}$
$\geq$ În funcție de semnul lui $S$ și $P$ menționate anterior în cadrul relațiilor lui Viete putem stabili câteva relații între rădăcinile $x_1$ și $x_2$ ale unei ecuații de gradul II:$\begin{aligned}[t] &S>0,\,P>0\implies x_1<0,\,x_2>0 \\ &S<0,\,P>0\implies x_1<0,\,x_2<0 \\ &S>0,\,P<0\implies x_1<0,\,x_2>0,\,|x_2|>|x_1| \\ &S<0,\,P<0\implies x_1<0,\,x_2>0,\,|x_1|>|x_2|\end{aligned}$

**REZOLVAREA UNOR SISTEME DE DOUĂ ECUAȚII CU DOUĂ NECUNOSCUTE**
**sisteme formate dintr-o ecuație de gradul I și una de gradul II:** din ecuația de gradul I exprimăm o necunoscută în funcție de cealaltă, înlocuim în a doua ecuație
$\geq$ Prin *soluția unui sistem* înțelegem o pereche $(x_0,y_0)\in\mathbb{R}\times\mathbb{R}$ care verifică ambele ecuații ale sistemului. Soluțiile sistemului reprezintă intersecțiile dintre dreaptă și parabolă.
**sisteme omogene:**
$\geq$ O ecuație de forma $ax^2+bxy+cy^2=d,\,a,b,c,d\in\mathbb{R}$ se numește *ecuație omogenă* de gradul al doilea cu necunoscutele $x$ și $y$. Un sistem format din două ecuații omogene se numește *sistem omogen*. Forma lui generală arată astfel: $(1)\begin{cases} ax^2+bxy+cy^2=d \\ mx^2+nxy+py^2=q\end{cases}$. Soluția sistemului $(1)$ este o pereche $(x_0,y_0)\in\mathbb{R}\times\mathbb{R}$. ***Observații:*** dacă $d=0$ sau $q=0$ atunci alegem acea ecuație și împărțim cu $y^2$ (sau descompunem în factori). Dacă $d\neq 0$ și $q\neq 0$ înmulțim convenabil ecuațiile și le adunăm/scădem astfel încât să obținem $0$ în dreapta.
**sisteme simetrice:**
$\geq$ O ecuație în necunoscutele $x$ și $y$ se numește *simetrică* dacă prin schimbarea necunoscutelor între ele ecuația nu se schimbă: $\begin{aligned}[t] &2x^2-3x-3y+2y^2=5 \\ &x\longleftrightarrow y:\,2y^2-3y-3x+2x^2=5\end{aligned}$ (de exemplu). Un sistem în care ambele ecuații sunt simetrice se numește *sistem simetric*. Indicație generală de rezolvare: $\text{notăm }S=x+y,\,P=xy\implies\text{ sistemul în necunoscutele }S\text{ și }P\text{ este mai simplu}$


# GEOMETRIE

**VECTORI ÎN PLAN**
$\geq$ Prin *segmentul* $(AB)$ înțelegem mulțimea punctelor dreptei $AB$ situate între punctele $A$ și $B$  (puncte ce sunt numite și *capete* sau *extremități*).
$\geq$ Prin *segmentul orientat* $AB$, notat $\overline{AB}$, înțelegem segmentul $(AB)$ împreună cu o ordine bine determinată a capetelor sale, adică $A$ este *originea* și $B$ este *vârful*. Acestea fiind spuse, $\overline{AB}\neq\overline{BA}.$
$\geq$ *Lungimea* segmentului orientat $\overline{AB}$ este lungimea segmentului $(AB)$. Aceasta se notează $|\overline{AB}|$. Spunem că două segmente orientate $\overline{AB}$ și $\overline{CD}$ au aceeași lungime dacă $AB=CD$.
$\geq$ *Direcția* segmentului orientat $\overline{AB}$ este formată din dreapta $AB$ și toate dreptele $d\parallel AB$. ***Observație:*** segmentele orientate $\overline{AB}$ și $\overline{CD}$ au aceeași direcție dacă $AB\parallel CD$ sau $A,B,C,D$ coliniare.
$\geq$ Fie $\overline{AB}$ și $\overline{CD}$ două segmente orientate cu aceeași direcție. Spunem că segmentele orientate au același *sens* dacă punctele $B$ și $D$ se află de aceeași parte a dreptei $AC$ sau dacă semidreptele $(AB$ și $(CD$ se includ una pe cealaltă. 
$\geq$ Spunem că segmentele orientate $\overline{AB}$ și $\overline{CD}$ sunt *echipolente* dacă au aceeași lungime, direcție șl sens. Relația de echipolență se notează astfel: $\overline{AB}\sim\overline{CD}$. $\overline{AB}\sim\overline{CD}\Longleftrightarrow \begin{cases}AB=CD\\ AB\parallel CD\text{ sau }A-B-C-D\\ A\rightarrow B,\,C\rightarrow D\text{ același sens}\end{cases}$
$\geq$ Propietăți:
$\overline{AB}\sim\overline{AB}\text{ (reflexitivitate)}$
$\overline{AB}\sim\overline{CD}\Longleftrightarrow\overline{CD}\sim\overline{AB}\text{ (simetrie)}$
$\left.\begin{aligned}\overline{AB}\sim\overline{CD}\\ \overline{CD}\sim\overline{EF}\end{aligned}\right\} \implies\overline{AB}\sim\overline{EF}\text{ (tranzitivitate)}$
$\geq$ Deoarece relația de echipolență este reflexivă, simetrică și tranzitivă, echipolența este și o *relație de echivalență*, ceea ce o determină să împartă mulțimea tuturor segmentelor orientate în *clase de echivalență*. ***Observație:*** pentru un segment orientat dat există o infinitate de segmente orientate echipolente cu el.
$\geq$ Mulțimea tuturor segmentelor orientate echipolente cu un segment orientat dat se numește *vector*. Vectorul este o clasă de echivalență. ***Observație:*** oricare segment orientat este considerat *reprezentant* al vectorului: $\begin{aligned}[t]&\overline{AB}\text{ segment orientat}\\ &\overrightarrow{AB}\text{ vector (liber)}\\ &\overrightarrow{AB}=\{\overline{AB},\,\overline{CD},\,\overline{EF},\,...\}\end{aligned}$
$\geq$ Prin *modulul* sau *lungimea* vectorului $\overrightarrow{AB}$ înțelegem $|\overrightarrow{AB}|=AB=BA$.
$\geq$ Prin *direcția* vectorului $\overrightarrow{AB}$ înțelegem dreapta $AB$ și $(\forall)d\parallel AB$.
$\geq$ *Sensul* vectorului $\overrightarrow{AB}$ este de la $A$ la $B$, unde $A$ se numește *origine* și $B$ *vârf*. 
$\overrightarrow u=\overrightarrow v\Longleftrightarrow\begin{cases}\text{-au același modul: }|\overrightarrow u|=|\overrightarrow v|\\ \text{-au aceeași direcție}\\ \text{-au același sens}\end{cases}$ 
$\overrightarrow{AB}=\overrightarrow{CD}\Longleftrightarrow\begin{cases}AB=CD\\ AB\parallel CD\text{ sau }A,B,C,D\text{ coliniare}\\ B,D\text{ de aceeași parte al lui }AC\end{cases}$
***Observație:*** dacă $A,B,C,D$ nu sunt toate coliniare: $\overrightarrow{AB}=\overrightarrow{CD}\Longleftrightarrow ABDC\text{ paralelogram}$.
***Observație:*** dacă $A=B$, atunci $\overrightarrow{AB}=\overrightarrow{AA}=\overrightarrow 0$ (vector *nul*). Vectorul nul are următoarele proprietăți: direcția este orice dreaptă (nu este bine definită) și originea este egală cu vârful. 
$\left.\begin{aligned}\overrightarrow{AB}\\ \overrightarrow{BA}\end{aligned}\right\} \left.\begin{aligned}&\text{-același modul}\\ &\text{-aceeași direcție}\\ &\text{-sens opus} \end{aligned}\right\}$ vectori *opuși*
$-\overrightarrow v\longrightarrow\text{ opusul vectorului }\overrightarrow v;\,\,\overrightarrow{AB}=-\overrightarrow{BA}$.

**OPERAȚII CU VECTORI LIBERI**
**adunarea vectorilor:**
$\geq$ Notăm cu $V$ mulțimea tuturor vectorilor. Dacă avem vectorii $\overrightarrow u$ și $\overrightarrow v$, atunci și suma lor, vectorul $\overrightarrow w=\overrightarrow u+\overrightarrow v$ , aparține de asemenea lui $V$.
1) $\overrightarrow u$ și $\overrightarrow v$ au ***același*** sens: 
$\left.\begin{aligned}\overrightarrow u=\overrightarrow{AB} \\ \overrightarrow v=\overrightarrow{BC}\end{aligned}\right\} \implies\overrightarrow u+\overrightarrow v=\overrightarrow{AC}=\overrightarrow w$
direcție: aceeași cu $\overrightarrow u$ și $\overrightarrow v$
sens: același cu $\overrightarrow u$ și $\overrightarrow v$
modul: $|\overrightarrow u+\overrightarrow v|=|\overrightarrow u|+|\overrightarrow v|$
2) $\overrightarrow u$ și $\overrightarrow v$ au sens ***opus***:
$\left.\begin{aligned}&\overrightarrow u=\overrightarrow{AB} \\&\overrightarrow v=\overrightarrow{BC}\end{aligned}\right\}\implies\overrightarrow u+\overrightarrow v=\overrightarrow{AC}$
direcție: comună cu $\overrightarrow u$ și $\overrightarrow v$
sens: același cu $\overrightarrow u$ ***pentru că*** $|\overrightarrow u|>|\overrightarrow v|$
3) $\overrightarrow u$ și $\overrightarrow v$  au sens ***opus*** și $|\overrightarrow u|=|\overrightarrow v|$
$\left.\begin{aligned}&\overrightarrow v=-\overrightarrow u \\&\overrightarrow u=-\overrightarrow v\end{aligned}\right\}$ vectori opuși
$\overrightarrow u+\overrightarrow v=\overrightarrow 0$
$\overrightarrow u+(-\overrightarrow u)=\overrightarrow 0$
4) $\overrightarrow u$ și $\overrightarrow v$ au ***direcții diferite***:
*Regula triunghiului:*
$\left.\begin{aligned}&\overrightarrow u=\overrightarrow{AB}\\ &\overrightarrow v=\overrightarrow{BC}\end{aligned}\right\}\implies\overrightarrow u+\overrightarrow v=\overrightarrow{AC}$
*Regula paralelogramului:*
$\left.\begin{aligned}&\overrightarrow u=\overrightarrow{AB}\\ &\overrightarrow v=\overrightarrow{AC}\\ &\text{ABCD paralelogram}\end{aligned}\right\}\implies\overrightarrow u+\overrightarrow v=\overrightarrow{AD}$
$\forall A,B,C$ puncte din plan: $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$

$\geq$ Proprietăți:
$(\overrightarrow u+\overrightarrow v)+\overrightarrow w=\overrightarrow u+(\overrightarrow v+\overrightarrow w),\,\forall\overrightarrow u,\,\,\overrightarrow v,\,\,\overrightarrow w\in V\text{ (asociativitate)}$
$\overrightarrow u+\overrightarrow v=\overrightarrow v+\overrightarrow u,\,\forall\overrightarrow u,\,\,\overrightarrow v\in V\text{ (comutativitate)}$
$\overrightarrow u+\overrightarrow 0=\overrightarrow u,\,\forall\overrightarrow u\in V\overrightarrow 0\in V\text{ (element neutru)}$
$\forall\overrightarrow v\in V\longrightarrow(\exists)-\overrightarrow v\in V$
$\geq$ Generalizare: *regula poligonului:* suma vectorilor este vectorul care închide poligonul. Acesta are originea primului vector și vârful ultimului vector.
**înmulțirea vectorilor:**
$\geq$ Prin *produsul* dintre numărul real $\alpha$ și vectorul $\overrightarrow v$ înțelegem vectorul $\alpha\cdot\overrightarrow v$ cu proprietățile: are ***aceeași*** direcție cu $\overrightarrow v\,\,(\alpha\neq 0)$; are ***același*** sens cu $\overrightarrow v$ dacă $\alpha>0$ și sens ***opus*** lui $\overrightarrow v$ dacă $\alpha<0$; modulul $|\alpha\cdot\overrightarrow v|=|\alpha|\cdot|\overrightarrow v|$ ; dacă $\alpha=0$ sau $\overrightarrow v=0$, atunci $\alpha\cdot\overrightarrow v=\overrightarrow 0$.
$\geq$ Proprietăți:
$(\alpha+\beta)\cdot\overrightarrow v=\alpha\cdot\overrightarrow v+\beta\cdot\overrightarrow v,\,\forall\alpha,\beta\in\mathbb{R}\text{ și }\overrightarrow v\in V$
$\alpha(\overrightarrow u+\overrightarrow v)=\alpha\cdot\overrightarrow u+\alpha\cdot\overrightarrow v,\,\forall\alpha\in\mathbb{R}\text{ și }\overrightarrow u,\,\,\overrightarrow v\in V$
$\alpha(\beta\cdot\overrightarrow v)=\beta(\alpha\cdot\overrightarrow v)=\alpha\beta\cdot\overrightarrow v,\,\forall\alpha,\beta\in\mathbb{R}\text{ și }\overrightarrow v\in V$
$1\cdot\overrightarrow v=\overrightarrow v,\,\forall\overrightarrow v\in V$

**VECTORI COLINIARI**
$\geq$ Doi vectori care au aceeași direcție se numesc vectori *coliniari*. Fie $\overrightarrow u,\,\overrightarrow v\in V,\,\overrightarrow u\neq0,\,\overrightarrow v\neq0$. Atunci $\overrightarrow u$ și $\overrightarrow v$ sunt coliniari dacă și numai dacă $\exists\alpha\in\mathbb{R}^*$ astfel încât $\overrightarrow u=\alpha\cdot\overrightarrow v$.
$\geq$ Dacă $\overrightarrow u$ și $\overrightarrow v$ nu au aceeași direcție, atunci ei se numesc *necoliniari*. ***Consecință:*** dacă $\overrightarrow u$ și $\overrightarrow v$ sunt necoliniari și $p\cdot\overrightarrow u+q\cdot\overrightarrow v,\,p,q\in\mathbb{R}$ atunci $p=q=0$.
$\geq$ Mulțimea formattă din doi vectori necoliniari se numește *bază*. ***Observație:*** orice vector din plan se exprimă în mod unic în funcție de doi vectori necoliniari.
$(\overrightarrow u,\overrightarrow v)$ bază
$\left.\begin{aligned}&\overrightarrow w=a\cdot\overrightarrow u+b\cdot\overrightarrow v\\ &\overrightarrow w=c\cdot\overrightarrow u+d\cdot\overrightarrow v\end{aligned}\right\}\implies a=c,\,b=d$

$a\cdot\overrightarrow u+b\cdot\overrightarrow v=c\cdot\overrightarrow u+d\cdot\overrightarrow v$
$\left.\begin{aligned}&(a-c)\overrightarrow u+(b-d)\overrightarrow v=\overrightarrow 0 \\&\text{fie }p=a-c\text{ și } q=b-d \\&\overrightarrow u,\,\overrightarrow v\text{ necoliniari}\end{aligned}\right\}\implies\begin{aligned}[t]&p=q=0 \\&a=c \\&b=d\end{aligned}$

**DESCOMPUNEREA UNUI VECTOR**
$\geq$ Pentru orice vector $\overrightarrow w\in V\,\,\,\exists a,b\in\mathbb{R}$ și baza $(\overrightarrow u,\,\overrightarrow v)$ astfel încât $\overrightarrow w=a\cdot\overrightarrow u+b\cdot\overrightarrow v$, unde $a$ și $b$ se numesc *componentele* lui $\overrightarrow w$ după baza $(\overrightarrow u,\,\overrightarrow v)$.

**REPER CARTEZIAN ÎN PLAN**
$\geq$ Fie punctele $x,y,O$ și dreptele $Ox\perp Oy$. Numim planul $(xOy)$ *sistem* sau *reper cartezian*, unde $Ox$ se numește *axa absciselor* și $Oy$ *axa ordonatelor*. $\forall A$ punct în plan există perechea $(x_a,y_a)\in\mathbb{R}\times\mathbb{R}$ numită *coordonatele* lui $A$, unde $x_a$ se numește *abscisă* și $y_a$ *ordonată*.
$\geq$ Vectorii $\overrightarrow i$ și $\overrightarrow j$  se numesc *versori ai axelor* și au următoarele proprietăți:
$\begin{aligned}&|\overrightarrow i|=|\overrightarrow j|=1 \\&\overrightarrow i\perp\overrightarrow j \\&\overrightarrow i\text{ direcția lui }Ox \\&\overrightarrow j\text{ direcția lui }Oy\end{aligned}$
Cum $\overrightarrow i$ și $\overrightarrow j$ sunt vectori necoliniari, ei reprezintă o bază.
$\geq$ Orice vector $\overrightarrow{OA}$ dintr-un reper cartezian unde $O$ se numește *origine* și are coordonatele $(0,0)$ poate fi descompus după baza $(\overrightarrow i,\,\overrightarrow j)$ după cum urmează: $\overrightarrow{OA}=x_a\cdot\overrightarrow i+y_a\cdot\overrightarrow j$. $\overrightarrow{AB}=(x_B-x_A)\overrightarrow i+(y_B-y_A)\overrightarrow j,\,\forall A,B$ din plan.
$\geq$ Operațiile cu vectorii scriși în funcție de $\overrightarrow i$ și $\overrightarrow j$ se realizează în felul următor: $\overrightarrow u=a\cdot\overrightarrow i+b\cdot\overrightarrow j,\,\overrightarrow v=c\cdot\overrightarrow i+d\cdot\overrightarrow j\implies\overrightarrow u+\overrightarrow v=(a+c)\overrightarrow i+(b+d)\overrightarrow j,\,k\cdot\overrightarrow u=k\cdot a\cdot\overrightarrow i+k\cdot b\cdot\overrightarrow j$. Modulul vectorului $\overrightarrow u$ poate fi exprimat în funcție de componentele $a$ și $b$ folosind formula $|\overrightarrow u|=\sqrt{a^2+b^2}$. ***Observații:*** $\overrightarrow u=\overrightarrow v\Longleftrightarrow a=c,\,b=d;\,\,\,\overrightarrow u,\,\overrightarrow v\text{ coliniari}\Longleftrightarrow\large\frac ac=\frac bd$.

**PARALELISM, COLINIARITATE ȘI CONCURENȚĂ**
$\geq$ Fie segmentul $[AB]$, punctul $M\in[AB]$, punctul fix $O\notin[AB]$ și raportul ${\large\frac{MA}{MB}}=k>0$ în care punctul $M$ împarte segmentul $[AB]$. $\overrightarrow{OA}$ se numește *vectorul de poziție* al punctului $A$ și se notează $\overrightarrow{r_A}$. Vectorul de poziție al punctului $M$ poate fi exprimat în funcție de $\overrightarrow{r_A}$ și $\overrightarrow{r_B}\,\,(\overrightarrow{OB})$: $\overrightarrow{OM}={\large\frac1{k+1}}\overrightarrow{OA}+{\large\frac k{k+1}}\overrightarrow{OB}$. Dacă $M$ este mijlocul segmentului $[AB]$, atunci $\overrightarrow{OM}={\large\frac12}(\overrightarrow{OA}+\overrightarrow{OB})$.
$\geq$ Vectorul de poziție al centrului de greutate $G$ al unui triunghi oarecare $\triangle ABC$ poate fi exprimat în funcție de $\overrightarrow{OA},\,\overrightarrow{OB}$ și $\overrightarrow{OC}$ astfel: $$\overrightarrow{OG}=\frac 13\left(\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}\right),\,\forall O\in\mathcal{P}$$ Dacă $O=G$ atunci $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\overrightarrow 0$.

**PARALELISM, TEOREMA LUI THALES ȘI TEOREMA BISECTOAREI**
$\geq$ *Teorema lui Thales:* o paralelă dusă la una din laturile unui triunghi (care nu trece prin niciun vârf al triunghiului) formează cu celelalte două laturi *segmente propoționale*. Fie $\triangle ABC,\,M\in AB,\,M\neq A,\,M\neq B$ și $N\in AC,\,N\neq A,\,N\neq C$. Dacă $MN\parallel BC$, atunci $\large\frac{AM}{AB}=\frac{AN}{AC}$.
$\geq$ *Teorema bisectoarei:* dacă semidreapta $(AD$ este bisectoarea unghiului $\angle A$ din triunghiul $\triangle ABC$, atunci $\large\frac{AB}{BD}=\frac{AC}{CD}\Longleftrightarrow\frac{CD}{BD}=\frac{AC}{AB}$. 
$\geq$ Vectorul de poziție al centrului cercului înscris $I$ într-un triunghi oarecare $\triangle ABC$ poate fi exprimat în funcție de $\overrightarrow{OA},\,\overrightarrow{OB}$ și $\overrightarrow{OC}$ și laturile $a=BC,\,b=AC$ și $c=AB$ astfel: $$\overrightarrow{OI}=\frac a{a+b+c}\overrightarrow{OA}+\frac b{a+b+c}\overrightarrow{OB}+\frac c{a+b+c}\overrightarrow{OC}$$
 
**PROBLEME DE COLINIARITATE, TEOREMA LUI MENELAUS**
$\geq$ *Teorema lui Menelaus:* fie $A'\in BC,\,B'\in AC,\,C'\in AC$ în $\triangle ABC$. $A',\,B'$și $C'$ sunt coliniare dacă și numai dacă ${\large\frac{A'B}{A'C}\cdot\frac{B'C}{B'A}\cdot\frac{C'A}{C'B}}=1$.
$\geq$ Vectorul de poziție al ortocentrului $H$ al unui triunghiu oarecare $\triangle ABC$ poate fi exprimat în funcție de $\overrightarrow{OA},\,\overrightarrow{OB}$ și $\overrightarrow{OC}$ astfel: $\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}=\overrightarrow{OH}$. Relația anterioară împreună cu relația $\overrightarrow{HA}+\overrightarrow{HB}+\overrightarrow{HC}=2\overrightarrow{HO}$ sunt cunoscunte sub numele de *relațiile lui Sylvester*.

**PROBLEME DE CONCURENȚĂ, TEOREMA LUI CEVA**
$\geq$ *Teorema lui Ceva:* fie $\triangle ABC$ și $D\in(BC),\,E\in(AC),\,F\in(AB)$. Dreptele $AD,\,BE$ și $CF$ sunt coliniare dacă și numai dacă ${\large\frac{DB}{DC}\cdot\frac{EC}{EA}\cdot\frac{FA}{FB}}=1$. În același triunghi $\triangle ABC$ are loc și *relația lui Van Aubel:* $\large\frac{FA}{FB}+\frac{EA}{EC}=\frac{OA}{OD}$.

**ELEMENTE DE TRIGONOMETRIE**
$\geq$ Fie triunghiul dreptunghic $\triangle ABC,\,m(\angle A)=90\degree$. Se definesc următoarele notații: $m(\angle B)=B,\,m(\angle C)=C$ și $BC=a,\,AC=b,\,AB=c$.
$\geq$ *Sinusul* unui unghi reprezintă raportul dintre cateta opusă și ipotenuză.
$\geq$ *Cosinusul* unui unghi reprezintă raportul dintre cateta alăturată și ipotenuză.
$\geq$ *Tangenta* unui unghi reprezintă raportul dintre cateta opusă și cateta alăturată. Alternativ, ea poate fi exprimată prin raportul dintre $\sin$ și $\cos$.
$\geq$ *Cotangenta* unui unghi reprezintă raportul dintre cateta alăturată și cateta opusă. Alternativ, ea poate fi exprimată prin raportul dintre $\cos$ și $\sin$:$$\sin\,B=\frac ba,\,\,\cos\,B=\frac ca,\,\,\tan\,B=\frac bc=\frac{\sin\,B}{\cos\,B},\,\,\cot\,B=\frac cb=\frac{\cos\,B}{\sin\,B}$$
***n. a.: În ciuda faptului că notațiile mai firești pentru funcțiile tangentă, respectiv cotangentă sunt "tg" și "ctg", toate aparițiile acestora vor fi indicate prin notațiile internaționale "tan", respectiv "cot".***
$\geq$ Pentru orice unghi $x\in(0,90\degree)$ au loc următoarele relații: $\begin{aligned}[t]&\sin\,x=\cos(90\degree-x) \\ &\cos\,x=\sin(90\degree-x) \\ &\tan\,x=\cot(90\degree-x)=\frac{\sin\,x}{\cos\,x}=\frac1{\cot\,x} \\ &\cot\,x=\tan(90\degree-x)=\frac{\cos\,x}{\sin\,x}=\frac1{\tan\,x}\end{aligned}$
$\geq$ *Formula fundamentală a trigonometriei* este adevărată $\forall x\in[0,360\degree]$: $\sin^2x+\cos^2x=1$.
$\geq$ Măsura unui arc de cerc este egală cu măsura unghiului la centru corespunzător:
$\begin{aligned}&m(\overset{\frown}{AB})=m(\angle AOB)=\alpha\degree \\&m(\overset{\frown}{CD})=m(\overset{\frown}{AB})=m(\angle COD)=m(\angle AOB)=\alpha\degree\end{aligned}$ 
***Observație:*** măsura unui arc de cerc nu depinde de raza cercului. în schimb, măsura influențează, alături de rază, lungimea arcului: $$ l_{\overset{\frown}{AB}}=\frac{\pi R}{180\degree}\cdot\alpha\degree\,\,(\text{forma simplificată al lui }\frac{2\pi R}{360\degree}\cdot\alpha\degree)$$
$\geq$ *Radianul* este măsura unui arc de cerc a cărui lungime este egală cu raza cercului. Măsura unui unghi în radiani se notează $\mu(\angle AOB)$. Transformarea din grade sexagesimale în radiani se face astfel:$$\mu(\overset{\frown}{MN})=\mu(\angle MON)=\frac{l_{\overset{\frown}{MN}}}{R}(\text{ sau se derivă din egalitatea: }\pi\text{ rad}=180\degree)$$

**CERCUL TRIGONOMETRIC**
$\geq$ Orice sistem cartezian este compus din patru *cadrane:* $\begin{aligned}[t]&\text{cadranul I: }x>0,\,y>0 \\&\text{cadranul II: }x<0,\,y>0 \\&\text{cadranul III: }x<0,\,y<0 \\&\text{cadranul IV: }x>0,\,y<0\end{aligned}$
$\geq$ Fie punctele $A(x_A,\,y_A)$ și $B(x_B,\,y_B)$. *Distanța* dintre punctele $A$ și $B$ se calculează prin formula $AB=\sqrt{(x_A-x_B)^2+(y_A-y_B)^2}$. ***Observații:*** dacă $A\in Ox$, atunci $A$ are coordonatele $(x,\,0),\,x\in\mathbb{R}$; dacă $A\in Oy$, atunci $A$ are coordonatele $(0,\,y),\,y\in\mathbb{R}$.
$\geq$ Cercul cu centrul în originea axelor $O$ și rază $1$ împreună cu cele două *sensuri de parcurgere* (pozitiv, respectiv negativ) se numește *cerc trigonometric*. $\forall t\in[0,2\pi]$ îi asociem $M_t\in\mathscr{C}$ astfel încât $l_{\overset{\frown}{AB}_t}=t$. $\forall t\in\mathbb{R}\implies t=2\pi\cdot k+t_0,$ unde $k\in\mathbb{Z},\,t_0\in[0,2\pi)$ rest. ***Observație:*** oricărui număr real $t$ îi putem asocia un punct pe cercul trigonometric astfel încât lungimea arcului $\overset{\frown}{AM}$ să fie $t_0$. 
$\geq$ Funcția $F:\mathbb{R}\rightarrow\mathscr{C}(0,1),\,F(t)=M_t\in\mathscr{C}$ se numește *funcția de acoperire a cercului trigonometric.* $\forall t\in\mathbb{R}\rightarrow M_t\in\mathscr{C}\implies M_t(x_M,\,y_M)$.

**FUNCȚIILE  SINUS ȘI COSINUS**
$\geq$ Fie un număr real $t$ și $M_t\in\mathscr{C}$ punctul corespunzător pe cercul trigonometric. Prin *cosinusul* numărului real $t$ înțelegem abscisa punctului $M$ și notăm $\cos t=x_M$. Prin *sinusul* numărului real $t$ înțelegem ordonata punctului $M$ și notăm $\sin t=y_M$. Funcția $f:\mathbb{R}\rightarrow\mathbb{R},\,f(t)=\cos t$ se numește *funcția cosinus* și funcția $g:\mathbb{R}\rightarrow\mathbb{R},\,g(t)=\sin t$ se numește *funcția sinus*. Intervalul $(0,\,2\pi)$ se numește *primul cerc trigonometric*.

|   $x$    | $0$ | $\displaystyle\frac\pi2$ | $\pi$ | $\displaystyle\frac{3\pi}2$ | $2\pi$ |
| :------: | :-: | :----------------------: | :---: | :-------------------------: | :----: |
| $\sin x$ | $0$ |           $1$            |  $0$  |            $-1$             |  $0$   |
| $\cos x$ | $1$ |           $0$            | $-1$  |             $0$             |  $1$   |

$\geq$ Proprietăți:
$\forall x\in\mathbb{R}\implies\cos x\in[-1,\,1],\,\sin x\in[-1,\,1]$
$\sin^2x+\cos^2x=1,\,\forall x\in\mathbb{R}$ ***Observație:*** $(\cos\,x)^2=\cos^2x\neq\cos\,x^2$
$\begin{cases}\sin(x+2k\pi)=\sin x \\ \cos(x+2k\pi)=\cos x,\,\forall x\in\mathbb{R},\,\forall k\in\mathbb{Z}\end{cases}\implies$ funcțiile $\sin$ și $\cos$ sunt funcții periodice cu perioada de forma $T=2k\pi,\,k\in\mathbb{Z}$
$\cos(-x)=\cos x,\,\forall x\in\mathbb{R}\implies$ funcția cosinus este o funcție ***pară***
$\sin(-x)=-\sin x,\,\forall x\in\mathbb{R}\implies$ funcția sinus este o funcție ***impară***

|          | $\text{CI}$ | $\text{CII}$ | $\text{CIII}$ | $\text{CIV}$ |
| :------: | :---------: | :----------: | :-----------: | :----------: |
| $\sin x$ |    **+**    |    **+**     |     **-**     |    **-**     |
| $\cos x$ |    **+**    |    **-**     |     **-**     |    **+**     |

**REDUCEREA LA PRIMUL CADRAN**
$\left.\begin{aligned}&\sin(\pi-x)=\sin x \\ &\cos(\pi-x)=-\cos x\end{aligned}\right\}$ $\text{CII}\rightarrow\text{CI}$

$\left.\begin{aligned}&\sin(\pi+x)=-\sin x \\ &\cos(\pi+x)=-\cos x\end{aligned}\right\}$ $\text{CIII}\rightarrow\text{CI}$

$\left.\begin{aligned}&\sin(2\pi-x)=-\sin x \\ &\cos(2\pi-x)=\cos x\end{aligned}\right\}$ $\text{CIV}\rightarrow\text{CI}$

$\begin{aligned}&\sin(90\degree-x)=\sin\left(\frac\pi2-x\right)=\cos x \\&\cos(90\degree-x)=\cos\left(\frac\pi2-x\right)=\sin x\end{aligned}$

**FORMULE PENTTRU SINUSUL ȘI COSINUSUL SUMEI ȘI DIFERENȚEI DE UNGHIURI**
$\forall a,\,b\in\mathbb{R}:\begin{aligned}[t]&\cos(a-b)=\cos a\cdot\cos b+\sin a\cdot\sin b \\ &\cos(a+b)=\cos a\cdot\cos b-\sin a\cdot\sin b \\ &\sin(a-b)=\sin a\cdot\cos b-\cos a\cdot\sin b \\&\sin(a+b)=\sin a\cdot\cos b+\cos a\cdot\sin b\end{aligned}$

**FORMULE PENTRU SINUSUL ȘI COSINUSUL ARGUMENTULUI DUBLU ȘI TRIPLU**
$\begin{cases}\sin2x=2\sin x+2\cos x \\ \cos 2x=\cos^2x-\sin^2x \\ \cos 2x=1-2\sin^2x \\ \cos2x=2\cos^2x-1\end{cases}$

$\begin{cases}\cos x=\sqrt{1-\sin^2x} \\ \sin x=\sqrt{1-\cos^2x}\end{cases}$

$\begin{cases}\sin 3x=3\sin x-4\sin^3x \\ \cos 3x=4\cos^3x-3\cos x\end{cases}$

**FUNCȚIILE TRIGONOMETRICE TANGENTĂ ȘI COTANGENTĂ**
$$\tan t=\frac{\sin t}{\cos t},\,t\notin\left\{(2k+1)\frac\pi2,\,k\in\mathbb{Z}\right\},\,\,\,\cot t=\frac{\cos t}{\sin t},\,t\in\left\{k\pi,\,k\in\mathbb{Z}\right\}$$
$\geq$ Prin *tangenta* numărului $t\in\mathbb{R}\setminus\left\{(2k+1){\large\frac\pi2}\,|\,k\in\mathbb{Z}\right\}$ înțelegem $\tan t={\large\frac{\sin t}{\cos t}}$. Prin *cotangenta* numărului $t\in\mathbb{R}\setminus\left\{k\pi\,|\,k\in\mathbb{Z}\right\}$ înțelegem $\cot t={\large\frac{\cos t}{\sin t}}$. 
$\geq$ Funcția $$\tan t:\mathbb{R}\setminus\left\{(2k+1)\frac\pi2\,|\,k\in\mathbb{Z}\right\}\rightarrow\mathbb{R},\,\tan=\frac{\sin t}{\cos t}$$ se numește *funcția tangentă*. Funcția $$\cot t:\mathbb{R}\setminus\left\{k\pi\,|\,k\in\mathbb{Z}\right\}\rightarrow\mathbb{R},\,\cot t=\frac{\cos t}{\sin t}$$ se numește *funcția cotangentă*.
$\geq$ Proprietăți:
$\begin{cases}\forall t\in\mathbb{R}\setminus\left\{(2k+1){\large\frac\pi2}\,|\,k\in\mathbb{Z}\right\}\implies\tan t\in\mathbb{R} \\ \forall t\in\mathbb{R}\setminus\left\{k\pi\,|\,k\in\mathbb{Z}\right\}\implies\cot t\in\mathbb{R}\end{cases}$

$\begin{cases}1+\tan^2x={\large\frac1{\cos^2x}},\,\forall x\in D_1,\,D_1=\mathbb{R}\setminus\left\{(2k+1){\large\frac\pi2}\,|\,k\in\mathbb{Z}\right\} \\ 1+\cot^2x={\large\frac1{\sin^2x}},\,\forall x\in D_2,\,D_2=\mathbb{R}\setminus\left\{k\pi\,|\,k\in\mathbb{Z}\right\}\end{cases}$

$\begin{cases}\tan(x+k\pi)=\tan x,\,\forall x\in D_1,\,\forall k\in\mathbb{Z} \\ \cot(x+k\pi)=\cot x,\,\forall x\in D_2,\,\forall k\in\mathbb{Z}\end{cases}\implies$ funcțiile $\tan$ și $\cot$ au perioadă principală $\pi$

|   $x$    | $\displaystyle\left(0,\,\frac\pi2\right)$ | $\displaystyle\left(\frac\pi2,\,\pi\right)$ | $\displaystyle\left(\pi,\,\frac{3\pi}2\right)$ | $\displaystyle\left(\frac{3\pi}2,\,2\pi\right)$ |
| :------: | :---------------------------------------: | :-----------------------------------------: | :--------------------------------------------: | :---------------------------------------------: |
| $\tan x$ |                   **+**                   |                    **-**                    |                     **+**                      |                      **-**                      |
| $\cot x$ |                   **+**                   |                    **-**                    |                     **+**                      |                      **-**                      |
$\begin{cases}\tan(-x)=-\tan x,\,\forall x\in D_1 \\ \cot(-x)=-\cot x,\,\forall x\in D_2\end{cases}\implies$ funcțiile $\tan$ și $\cot$ sunt impare
$\begin{cases}\tan\left(\frac\pi2-x\right)=\cot x \\ \cot\left(\frac\pi2-x\right)=\tan x\end{cases}$

**FORMULE PENTRU TANGENTA SUMEI ȘI DIFERENȚEI DE UNGHIURI**
$$\tan(a+b)=\frac{\tan a+\tan b}{1-\tan a\cdot\tan b},\,\,\tan(a-b)=\frac{\tan a-\tan b}{1+\tan a\cdot\tan b},\,\,\cot(a+b)=\frac1{\tan(a+b)}$$

|   $x$    | $0$ | $\displaystyle\frac\pi2$ | $\pi$ | $\displaystyle\frac{3\pi}2$ | $2\pi$ |   $\displaystyle\frac\pi6$    |   $\displaystyle\frac\pi3$    |   $\displaystyle\frac\pi4$    |
| :------: | :-: | :----------------------: | :---: | :-------------------------: | :----: | :---------------------------: | :---------------------------: | :---------------------------: |
| $\sin x$ | $0$ |           $1$            |  $0$  |            $-1$             |  $0$   |    $\displaystyle\frac12$     | $\displaystyle\frac{\sqrt3}2$ | $\displaystyle\frac{\sqrt2}2$ |
| $\cos x$ | $1$ |           $0$            | $-1$  |             $0$             |  $1$   | $\displaystyle\frac{\sqrt3}2$ |    $\displaystyle\frac12$     | $\displaystyle\frac{\sqrt2}2$ |
| $\tan x$ | $0$ |           $-$            |  $0$  |             $-$             |  $0$   | $\displaystyle\frac{\sqrt3}3$ |           $\sqrt3$            |              $1$              |
| $\cot x$ | $-$ |           $0$            |  $-$  |             $0$             |  $-$   |           $\sqrt3$            | $\displaystyle\frac{\sqrt3}3$ |              $1$              |
$$\tan 2x=\frac{2\tan x}{1-\tan^2x},\,\,\tan\frac x2=\frac{\sin x}{1+\cos x}=\frac{1-\cos x}{\sin x}$$
**substituția universală (exprimarea funcțiilor trigonometrice în funcție de tangenta jumătății argumentului):**$$\sin x=\frac{2\tan{\large\frac x2}}{1+\tan^2{\large\frac x2}},\,\,\cos x=\frac{1-\tan^2{\large\frac x2}}{1+\tan^2{\large\frac x2}},\,\,\tan x=\frac{2\tan{\large\frac x2}}{1-\tan^2{\large\frac x2}},\,\,\cot x=\frac{1-\tan^2{\large\frac x2}}{2\tan{\large\frac x2}}$$

**TRANSFORMAREA PRODUSELOR ÎN SUME ȘI A SUMELOR ÎN PRODUSE**
**din sume în produse**:
$$\sin x+\sin y=2\sin\frac{x+y}2\cdot\cos\frac{x-y}2,\,\,\sin x-\sin y=2\cos\frac{x+y}2\cdot\sin\frac{x-y}2$$$$\cos x+\cos y=2\cos\frac{x+y}2\cos\frac{x-y}2,\,\,\cos x-\cos y=-2\sin\frac{x+y}2\sin\frac{x-y}2$$
**din produse în sume:**$$\sin a\sin b=\frac12\bigg[\cos(a-b)-\cos(a+b)\bigg],\,\,\cos a\cos b=\frac12\bigg[\cos(a+b)+\cos(a-b)\bigg]$$$$\sin a\cos b=\frac12\bigg[\sin(a+b)+\sin(a-b)\bigg]$$
**PRODUSUL SCALAR A DOI VECTORI**
$\geq$ Fie $\overrightarrow u$ și $\overrightarrow v$ vectori astfel încât $m(\angle\overrightarrow u,\,\overrightarrow v)=\alpha$. Prin *produsul scalar* al vectorilor $\overrightarrow u$ și $\overrightarrow v$ înțelegem numărul real notat $\overrightarrow u\cdot\overrightarrow v$ cu proprietatea $\overrightarrow u\cdot\overrightarrow v=|\overrightarrow u|\cdot|\overrightarrow v|\cdot\cos\alpha$, dacă $\overrightarrow u$ și $\overrightarrow v$ nenuli sau $\overrightarrow u\cdot\overrightarrow v=0$, dacă $\overrightarrow u$ sau $\overrightarrow v$ nul. ***Observație:*** $\overrightarrow u\perp\overrightarrow v\Longleftrightarrow\overrightarrow u\cdot\overrightarrow v=0,\,\cos\alpha=0$. Există patru cazuri particulare:
1) $\alpha=0\implies\cos\alpha=1\implies\overrightarrow u\cdot\overrightarrow v=|\overrightarrow u||\overrightarrow v|:$ ***aceeași*** direcție, ***același*** sens
2) $\alpha=\pi\implies\cos\alpha=-1\implies\overrightarrow u\cdot\overrightarrow v=-|\overrightarrow u||\overrightarrow v|:$ ***aceeași*** direcție, sens ***diferit***
3) $\overrightarrow u\cdot\overrightarrow v>0\implies\cos\alpha>0\implies\alpha\in\displaystyle\left(0,\frac\pi2\right)$
4) $\overrightarrow u\cdot\overrightarrow v<0\implies\cos\alpha<0\implies\alpha\in\displaystyle\left(\frac\pi2,\pi\right)$

$\geq$ Proprietăți:
$\overrightarrow u\cdot\overrightarrow v=\overrightarrow v\cdot\overrightarrow u\text{ (comutativitate)}$
$\overrightarrow u(\overrightarrow v+\overrightarrow w)=\overrightarrow u\cdot\overrightarrow v+\overrightarrow u\cdot\overrightarrow w\text{ (distributivitate)}$
$\overrightarrow u(k\cdot\overrightarrow v)=(k\overrightarrow u)\cdot\overrightarrow v=k\,\overrightarrow u\,\overrightarrow v,\,k\in\mathbb{R}$
$\overrightarrow u\,^2=\overrightarrow u\cdot\overrightarrow u=|\overrightarrow u||\overrightarrow u|\cos0=|\overrightarrow u|^2$
$|\overrightarrow u+\overrightarrow v|^2=|\overrightarrow u|^2+2\overrightarrow u\overrightarrow v+|\overrightarrow v|^2$
$|\overrightarrow u-\overrightarrow v|^2=|\overrightarrow u|^2-2\overrightarrow u\overrightarrow v+|\overrightarrow v|^2$
$(\overrightarrow u+\overrightarrow v)(\overrightarrow u-\overrightarrow v)=|\overrightarrow u|^2-|\overrightarrow v|^2$
$\geq$ Produsul scalar dintre doi vectori $\overrightarrow u=a\overrightarrow i+b\overrightarrow j$ și $\overrightarrow v=c\overrightarrow i+d\overrightarrow j$ este $\overrightarrow u\cdot\overrightarrow v=ac+bd$. Între versorii $\overrightarrow i$ și $\overrightarrow j$ mai există și următoarele proprietăți: $\overrightarrow i\cdot\overrightarrow i=1$ și $\overrightarrow j\cdot\overrightarrow j=0$.

**APLICAȚII ALE PRODUSULUI SCALAR ÎN GEOMETRIE**
$\geq$ *Teorema cosinusului*: în orice triunghiu $\triangle ABC$ are loc relația: $BC^2=AB^2+AC^2-2AB\cdot AC\cdot\cos A$. Folosind notațiile definite anterior, avem setul de relații: $\begin{aligned}[t]&a^2=b^2+c^2-2bc\cdot\cos A \\&b^2=a^2+c^2-2ac\cdot\cos B \\&c^2=a^2+b^2-2ab\cdot\cos C\end{aligned}$. 
Din acestea, se pot deriva alte trei relații: $\begin{aligned}[t]&\cos A=\frac{b^2+c^2-a^2}{2bc} \\&\cos B=\frac{c^2+a^2-b^2}{2ac} \\&\cos C=\frac{a^2+b^2-c^2}{2ab}\end{aligned}$.
$\geq$ *Relația lui Stewart:* fie $A,B,C\in d$ astfel încât $B\in(AC)$ și $M\notin d$. Atunci are loc relația $MA^2\cdot BC+MC^2\cdot AB-MB^2\cdot AC=AB\cdot BC\cdot AC$.
$\geq$ *Teorema medianei:* fie $\triangle ABC$ și $M\in(BC),\,MB\equiv MC$. Notăm segmentul $[AM]$ prin $m_a$, notație ce indică lungimea medianei din $A$. Există și notațiile $m_b$ și respectiv $m_c$ pentru a indica lungimea medianei din $B$, respectiv din $C$: $$m_a^2=\frac{2(b^2+c^2)-a^2}4,\,\,m_b^2=\frac{2(c^2+a^2)-b^2}4,\,\,m_c^2=\frac{2(a^2+b^2)-c^2}4$$
**APLICAȚII TRIGONOMETRIEI ÎN GEOMETRIE**
**relații între unghiuri:**
$A+B+C=180\degree\;(\pi)$
$\sin(A+B)=\sin C\quad(\sin(\pi-C))$
$\cos(A+B)=-\cos C\quad(\cos(\pi-C))$
$\displaystyle\sin\frac{B+C}2=\cos\frac A2\quad\bigg(\sin\frac{\pi-A}2\bigg)$
$\displaystyle\cos\frac{B+C}2=\sin\frac A2\quad\bigg(\cos\frac{\pi-A}2\bigg)$
**relații între unghiurile și laturile unui triunghi:**
$\geq$ Pe lângă teorema cosinusului avem și *teorema sinusurilor:* ${\large\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}}=2R$, unde $R$ reprezintă raza cercului circumscris triunghiului. 
$\geq$ În cadrul următoarelor formule notația $p={\large\frac{a+b+c}2}$ indică *semiperimetrul* unui triunghi:
$\begin{cases}\sin{\Large\frac A2}=\sqrt{\Large\frac{(p-b)(p-c)}{bc}} \\ \sin{\Large\frac B2}=\sqrt{\Large\frac{(p-a)(p-c)}{ac}} \\ \sin{\Large\frac C2}=\sqrt{\Large\frac{(p-a)(p-b)}{ab}}\end{cases}$

$\begin{cases}\cos{\Large\frac A2}=\sqrt{\Large\frac{p(p-a)}{bc}} \\ \cos{\Large\frac B2}=\sqrt{\Large\frac{p(p-b)}{ac}} \\ \cos{\Large\frac C2}=\sqrt{\Large\frac{p(p-c)}{ab}}\end{cases}$

$\begin{cases}\tan{\Large\frac A2}=\sqrt{\Large\frac{(p-b)(p-c)}{p(p-a)}}\quad\Bigg(\cot{\Large\frac A2}=\sqrt{\Large\frac{p(p-a)}{(p-b)(p-c)}}\Bigg) \\ \tan{\Large\frac B2}=\sqrt{\Large\frac{(p-a)(p-c)}{p(p-b)}} \\ \tan{\Large\frac C2}=\sqrt{\Large\frac{(p-a)(p-b)}{p(p-c)}}\end{cases}$

**REZOLVAREA TRIUNGHIULUI OARECARE**
$\geq$ *A rezolva* un triunghi înseamnă a determina toate elementele sale când cunoaștem câteva dintre ele. ***Observație:*** în cazul unghiurilor este destul să cunoaștem doar o funcție trigonometrică a fiecăruia dintre ele.
**cazul L.U.L. (latură-unghiu-latură):**
$\begin{cases}AB=c \\ BC=a \\ m(\angle B)=B\end{cases}$
$T\cos\implies AC^2=a^2+c^2-2ac\cos B$
$T\cos\implies\cos A={\Large\frac{b^2+c^2-a^2}{2bc}}$
$C=180\degree-A-B$
**cazul U.L.U. (unghi-latură-unghi):**
$\begin{cases}m(\angle A)=A \\ m(\angle B)=B \\ AB=c\end{cases}\implies C=180\degree-(A+B)$
$T\sin\implies{\large\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}}=2R\implies a={\Large\frac{c\sin A}{\sin C}},\,b={\Large\frac{c\sin B}{\sin C}}$
**cazul L.L.L. (latură-latură-latură):**
$T\cos\implies\cos A={\Large\frac{b^2+c^2-a^2}{2bc}},\,\cos B={\Large\frac{c^2+a^2-b^2}{2ac}}$
$C=\pi-(A+B)$

**FORMULE PENTRU ARIA UNUI TRIUNGHI**
$\mathcal{A}_{ABC}=S_{ABC}=S$
$$S=\frac{b\cdot c\cdot\sin A}2=\frac{a\cdot b\cdot\sin C}2=\frac{a\cdot c\cdot\sin B}2$$
$AA'=h_a$ înățimea corespunzătoare lui $a$
$h_b$ înălțimea corespuzătoare lui $b$
$h_c$ înălțimea corespunătoare lui $c$
$$S=\frac{a\cdot h_a}2=\frac{b\cdot h_b}2=\frac{c\cdot h_c}2,\,\,S=\sqrt{p(p-a)(p-b)(p-c)}\quad(\text{formula lui Heron})$$
$$S=\frac{a^2\cdot\sin B\cdot\sin C}{2\sin A}=\frac{b^2\cdot\sin A\cdot\sin C}{2\sin B}=\frac{c^2\cdot\sin A\cdot\sin B}{2\sin C}$$
$$S=\frac{abc}{4R},\,\,S=rp,$$
unde $R$ este raza cercului circumscris și $r$ raza cercului înscris.