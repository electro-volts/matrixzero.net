# ALGEBRĂ

**NUMERE REALE**
$\mathbb{N}=\{0,\,1,\,2,\,3,\,...\}$: mulțimea nr. *naturale*
$\mathbb{Z}=\mathbb{N}\cup\{-1,\,-2,\,-3,\,...\}=\{...,\,-3,\,-2,\,-1,\,0,\,1,\,2,\,3,\,...\}$: mulțimea nr. *întregi*
$\mathbb{Q}=\{\frac ab\,|\,\,a,\,b\in\mathbb{Z},\,b\neq0\}$: mulțimea nr. *raționale*
$\mathbb{R}\,\backslash\,\mathbb{Q}$: mulțimea nr. *reale*
$\geq$ Orice număr rațional se scrie sub formă de fracție zecimală finită sau infinită periodică, cu perioada diferită de 0 sau 9.

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
$$m_a=\frac{a_1+a_2+...+a_n}n;\,\,m_h=\frac n{\frac{1}{a_1}+\frac{1}{a_2}+...+\frac{1}{a_n}};\,\,m_g=\sqrt[n]{a_1\cdot a_2\cdot...\cdot a_n}$$
$\geq$ Mediile sunt, de la stânga la dreapta: media *aritmetică*, media *armonică* și media
*geometrică*. Pentru $n=2,\,m_h\leq m_g\leq m_a,\,\forall x,\,y>0$.

**INEGALITATEA CAUCHY-BUNIAKOVSKI-SCHWARZ (CBS)**
$(a^2+b^2)(x^2+y^2)\geq(ax+by)^2,\,\forall a,b,x,y\in\mathbb{R}$
$(a^2+b^2)(x^2+y^2)=(ax+by)^2\Longleftrightarrow\frac ax=\frac by,\,x,y\neq0$
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
$|\frac xy|=\frac{|x|}{|y|},\forall x,y\in\mathbb{R},y\neq0$
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
$[x+k]=[x]+k.\forall x\in\mathbb{R},k\in\mathbb{Z}$
$\geq$ *Partea fracționară* a unui nr. real $x$ reprezintă diferența dintre $x$ și partea sa întreagă $[x]$: 
$\{x\}=x-[x]$.
$\geq$ Proprietăți:
$0\leq\{x\}<1,\forall x\in\mathbb{R}$
$\{x\}=0\Longleftrightarrow x\in\mathbb{Z}$

**ELEMENTE DE LOGICĂ MATEMATICĂ**
$\geq$ Un enunț despre care putem spune că este adevărat sau fals, dar nu ambele, se numește
*propoziție logică.*
$\geq$ *Valorile de adevăr* sunt *"adevărat" ("A" sau "1")* și *"fals" ("F" sau "0")*. 
$\geq$ Prin *negația* propoziției logice $p$ înțelegem propoz. notată $\neg p$ sau $\overline p$ numită "$non\,\,p$" care este
adevărată când $p$ este falsă și este falsă când $p$ este adevărată. 
$\geq$ *Tabel de adevăr* pentru negația propozițiilor:

| $p$ | $\neg p$ |
| :-: | :------: |
| $1$ |   $0$    |
| $0$ |   $1$    |
$\geq$ *Conjuncția* propozițiilor $p$ și $q$ este propoz. notată "$p\land q$" care este adevărată numai dacă ambele propoziții sunt adevărate.
$\geq$ *Disjuncția* propozițiilor $p$ și $q$ este propoz. notată "$p\lor q$" (citită "$p$ sau $q$") care este adevărată atunci când cel puțin una dintre propoz. $p$ și $q$ este adevărată.
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
$\geq$ Prin *formulă propozițională* înțelegem o expresie în care apar mai multe propoz. legate între ele prin *conectori logici*: $\alpha=\alpha(p,\,q,\,r\,...)$, $\beta=\beta(p,\,q,\,r,\,...)$. $\alpha\equiv\beta$ dacă pentru orice înlocuire a propozițiilor cu valori de adevăr cele două formule au aceeași formulă de adevăr. Spre exemplu, $\alpha\equiv\beta$, unde $\alpha$ reprezintă formula $\neg(p\lor q)$ și $\beta$ reprezintă formula $(\neg p)\land(\neg q)$:

| $p$ | $q$ | $p\lor q$ | $\neg(p\lor q)$ | $\neg p$ | $\neg q$ | $(\neg p)\land(\neg q)$ |
| :-: | :-: | :-------: | :-------------: | :------: | :------: | :---------------------: |
| $1$ | $1$ |    $1$    |       $0$       |   $0$    |   $0$    |           $0$           |
| $1$ | $0$ |    $1$    |       $0$       |   $0$    |   $1$    |           $0$           |
| $0$ | $1$ |    $1$    |       $0$       |   $1$    |   $0$    |           $0$           |
| $0$ | $0$ |    $0$    |       $1$       |   $1$    |   $1$    |           $1$           |
$\geq$ O formulă prop. care este adevărată indiferent de valorile de adevăr ale prop. componente se numește *tautologie* sau *formulă identic adevărată*. De pildă, formula $\alpha\equiv p\lor(\neg  p)$ reprezintă o astfel de tautologie:

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
$\geq$ Fie $P(n)$ o propoziție care depinde de un nr. natural $n$. Dacă propoziția $P(0)$ este adevărată și din $P(k)$ adevărată, $k\in\mathbb{N}$ oarecare rezultă $P(k+1)$ adevărată atunci $P(n)$ este adevărată $\forall n\in\mathbb{N}$.
$\geq$ Fie $P(n)$ o propoziție care depinde de $n\in\mathbb{N},\,n\geq m$. Această metodă presupune două etape:
1) verificăm dacă $P(m)$ este $\text{"A"}$
2) presupunem că $P(k)$ este $\text{"A"},\,k\in\mathbb{N},\,k\geq m$, oarecare și demonstrăm $P(k+1)$ este $\text{"A"}$
Dacă qambele etape au loc atunci $P(n)\text{ "A"}\,\,\forall n\geq m$.
$\geq$ Se definesc următoarele notații: $$\frac{1}{1\cdot 4}+\frac{1}{4\cdot 7}+...+\frac{1}{(3n-2)(3n+1)}=\sum_{k=1}^{n} \frac{1}{(3k-2)(3k+1)}\,\,\,\text{ și }\,\,\,1^2\cdot 2^2\cdot 3^2\cdot...\cdot n^2=\prod_{k=1}^n k^2,$$
unde operatorul $\Sigma$ indică "sumă pentru $k$ de la $1$ la $n$" și operatorul $\Pi$ indică "produs pentru $k$ de la $1$ la $n$".

**ȘIRURI DE NUMERE REALE**
$\geq$ O *funcție* este notată $f:A\rightarrow B;\,\forall x\in A\,\,\exists f(x)\in B\text{ unic}$, unde $A$ se numește *domeniu de definiție*, $B$ *codomeniu* sau *mulțimea imaginilor* și $f(x)$ *imaginea lui $x$ prin funcția $f$*.
$\geq$ O funcție $f:\mathbb{N}_k\rightarrow\mathbb{R}$ se numește *șir de numere reale*, unde $\mathbb{N}_k=\{n\in\mathbb{N}\,|\,n\geq k,\,k\geq\mathbb{N}\}$. $\forall n\in\mathbb{N},\,n\geq k\rightarrow f(n)\in\mathbb{R}\text{ unic}$, unde $f(n)=a_n\in\mathbb{R}$ se numește *termenul de rang $n$ al șirului*. ***Observație:*** orice șir are o infinitate de termeni. Un șir poate fi definit prin unul dintre următoarele trei moduri:
1) prin *enumerare*
2) cu ajutorul unei *formule* sau a mai multor formule, unde formula reprezintă o legătură dintre rang și valoare: $b_n=\frac{2n-1}{2n+1},\forall n\in\mathbb{N}^*$ (de exemplu).
3) printr-o *relație de recurență*, unde relația de recurență reprezintă o legătură între doi sau mai mulți termeni consecutivi ai șirului: $f_n=f_{n-1}+f_{n-2},\,\forall n\geq 2$ (de exemplu).

$\geq$ Spunem că șirul $(a_n)_{n\geq 1}$ este:
1) *strict crescător* dacă $a_n<a_{n+1}\,\forall n\in\mathbb{N}^*$
2) *crescător* dacă $a_n\leq a_{n+1},\,\forall n\in\mathbb{N}^*$
3) *strict descrescător* dacă $a_n>a_{n+1},\,\forall n\in\mathbb{N}^*$
4) *descrescător* dacă $a_n\geq a_{n+1}\,\forall n\in\mathbb{N}^*$

$\geq$ Un șir $(a_n)_{n\geq 1}$ se numește *mărginit* dacă $\exists a,b\in\mathbb{R},\,a<b$ astfel încât $a\leq a_n\leq b,\,\forall n\in\mathbb{N}^*$, unde $a$ se numește *margine inferioară* și $b$ *margine superioară*.
$\geq$ Un șir în care fiecare termen începând cu al doilea se obține din cel anterior prin adunarea aceluiași număr real numit *rație* se numește *progresie aritmetică*: $a_n=a_{n-1}+r,\,\forall n\geq 2$. Formula pentru termenul de rang $n$ al unei progresii aritmetice în funcție de rația $r$ și primul termen $a_1$ este următoarea: $a_n=a_1+(n-1)r$. ***Observație:*** o progresie aritmetică este unic determinată de primul său termen și de rație.
$\geq$ Spunem că numerelee reale $x_1,x_2,...,x_n$ sunt în progresie aritmetică dacă sunt termeni consecutivi ai unei progresii aritmetice: $\div\,x_1,x_2,...,x_n$.
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
Reciproca afirmației este, în general, ***falsă***.
$\geq$ Dacă funcția $f:\mathbb{R}\rightarrow\mathbb{R},\,f(x)=\begin{cases} f_1(x),x\leq a \\ f_2(x),\,x>a\end{cases}$ este strict $\nearrow$ pe $(-\infty,a]$ și pe $(a,+\infty)$ trebuie să aibă loc și relația $f_1(a)\leq f_2(a)$ astfel încât $f$ să fie strict $\nearrow$ pe $\mathbb{R}$. Analog, dacă $f$ este strict $\searrow$ pe $(-\infty,a]$ și pe $(a,+\infty)$ trebuie să aibă loc și relația $f_1(a)\geq f_2(a)$ astfel încât $f$ să fie strict $\searrow$ pe $\mathbb{R}$.
$\geq$ Fie $f:D\rightarrow\mathbb{R},\,D\subset\mathbb{R}$. Spunem că $f$ este periodică dacă $\exists T\in\mathbb{R},\,T\neq 0$ cu proprietatea $f(x+T)=f(x),\,\forall x\in D$. Numărul real $T\neq 0$ se numește *perioadă* a funcției $f$. ***Observație:*** dacă o funcție are o perioadă atunci ea are o infinitate de perioade: $f(x+kT)=f(x),\,\forall x\in D,\,\forall k\in\mathbb{Z}^*$.
$\geq$ Dacă $T\neq 0$ este o perioadă a funcției $f$ atunci numerele $kT,\,k\in\mathbb{Z}^*$ sunt perioade ale funcției $f$, adică $f$ admite o infinitate de perioade. Dacă există, cea mai mică perioadă strict pozitivă se numește *perioadă principală*. 
$\geq$ Fie funcțiile $f,g:D\rightarrow\mathbb{R},\,D\subset\mathbb{R}\text{ (numerice)}$. Se definesc următoarele *operații cu funcții*:
1) adunarea: $f+g:D\rightarrow\mathbb{R},\,(f+g)(x)=f(x)+g(x),\,\forall x\in D$, unde $(f+g)(x)$ reprezintă *funcția sumă*
2) produsul: $f\cdot g:D\rightarrow\mathbb{R},\,(f\cdot g)(x)=f(x)\cdot g(x),\,\forall x\in D$, unde $(f\cdot g)(x)$ reprezintă *funcția produs*
3) împărțirea: $\frac fg:D_1\rightarrow\mathbb{R},\,(\frac fg)(x)=\frac{f(x)}{g(x)},\,\forall x\in D$, unde $(\frac fg)(x)$ reprezintă *funcția cât* și $D_1=\{x\in D\,|\,g(x)\neq 0\}$

$\geq$ Dacă  $f:A\rightarrow B,\,g:B\rightarrow C$ prin *compunerea* funcțiilor $g$ și $f$ înțelegem funcția notată $g\circ f$ cu proprietățile: $\begin{aligned} &g\circ f:A\rightarrow C \\ &(g\circ f)(x)=g(f(x)),\,\forall x\in A.\end{aligned}$ ***Observații:*** $g\circ f$ are sens $\Longleftrightarrow$ domeniul de definiție al lui $g$ coincide cu codomeniul lui $f$; suma a două funcții strict crescătoare/descrescătoare este o funcție strict crescătoare/descrescătoare; compunerea a două funcții de aceeași monotonie este o funcție strict crescătoare; compunerea a două funcții de monotonii diferite este o funcție strict descrescătoare. În general, compunerea funcțiilor ***nu*** este comutativă. Compunerea funcțiilor este, în schimb, asociativă: $A\overset{f}\longrightarrow B\overset{g}\longrightarrow C\overset{h}\longrightarrow D\implies\begin{aligned} &h\circ(g\circ f):A\rightarrow D \\ &(h\circ g)\circ f:A\rightarrow D.\end{aligned}$
Altfel spus, $(h\circ g)\circ f=h\circ(g\circ f)$.
$\geq$ Funcția $1_A:A\rightarrow A,\,1_A(x)=x,\,\forall x\in A$ se numește *funcția identică* a mulțimii $A$: $\begin{aligned}&1_{\mathbb{N}}:\mathbb{N}\rightarrow\mathbb{N},\,1_{\mathbb{N}}(n)=n,\,\forall n\in\mathbb N \\ &A\overset{1_A}\longrightarrow A\overset{f}\longrightarrow B \\ &(f\circ 1_A)(x)=f(1_A(x))=f(x)\implies f\circ 1_A=f\,\,\text{ element neutru la dreapta} \\ &A\overset{f}\longrightarrow B\overset{1_B}\longrightarrow B \\ &(1_B\circ f)(x)=1_B(f(x))=f(x)\implies1_B\circ f=f\,\,\text{ element neutru la stânga}\end{aligned}$

**FUNCȚIA DE GRADUL II**
$\geq$ O ecuație de forma $ax^2+bx+c=0\,\,(1)$ unde $a,b,c\in\mathbb{R},\,a\neq 0$ se numește *ecuație de gradul al doilea*. Numerele reale $a,b,c$ se numesc *coeficienți* ai ecuației, iar $x$ se numește *necunoscută*.
$\geq$ Prin *soluție* a ecuației $(1)$ înțelegem un nr. real $\alpha$ cu proprietatea $a\alpha^2+b\alpha+c=0$.
$\geq$ *Rezolvarea* ecuației de gradul II presupune aflarea *rădăcinilor* $x_1,x_2$ folosind formula $x_{1,2}=\frac{-b\pm\sqrt{\Delta}}{2a}$, unde $\Delta$ se numește *discriminant* și are formula $\Delta=b^2-4ac$. În funcție de semnul lui delta ($\Delta$), soluțiile oricărei ecuații aparțin unuia dintre următoarele trei cazuri:
1) două soluții reale: $\Delta>0\implies x_1,x_2\in\mathbb{R},\,x_1\neq x_2$
2) o soluție reală/două soluții reale identice: $\Delta=0\implies x_1,x_2\in\mathbb{R},\,x_1=x_2=-\frac b{2a}$
3) nicio soluție reală: $\Delta<0\implies x_1,x_2\notin\mathbb{R}$

$\geq$ Dacă $x_1,x_2$ sunt rădăcinile (soluțiile) ecuației $(1)$ atunci au loc următoarele relații (cunoscute și ca *relațiile lui Viete*): $S=x_1+x_2=-\frac ba,\,P=x_1\cdot x_2=\frac ca$. Dacă $x_1,x_2\in\mathbb{R}$ și $S=x_1+x_2,\,P=x_1x_2$ atunci ecuația $x^2-Sx+P=0$ are ca soluții reale pe $x_1$ și $x_2$. ***Observații:*** $x_1^2+x_2^2=S^2-2P,\,x_1^3+x_2^3=S(S^2-3P)$. 
$\geq$ O expresie de forma $ax^2+bx+c,\,a,b,c\in\mathbb{R},\,a\neq 0$ se numește *trinom de gradul al doilea*. Dacă $a,b,c\in\mathbb{R},\,a\neq 0$ și $x_1,x_2\in\mathbb{R}$ sunt rădăcinile ecuației $ax^2+bx+c=0$ atunci $ax^2+bx+c=a(x-x_1)(x-x_2)$.
$\geq$ Funcția $f:\mathbb{R}\rightarrow\mathbb{R},\,f(x)=ax^2+bx+c,\,a,b,c\in\mathbb{R},\,a\neq 0$ se numește *funcție de gradul al doilea*. Ecuația $ax^2+bx+c=0$ s numește *ecuație asociată* funcției de gradul II. Orice funcție de gradul II admite o *formă canonică*:$$f(x)=a(x+\frac b{2a})^2+\frac{-\Delta}{4a}$$
$\geq$ Fie $f:D\rightarrow\mathbb{R},\,D\subseteq\mathbb{R}$. Spunem că $x_0\in D$ este un punct de *minim (maxim)* al funcției $f$ dacă $f(x)\geq f(x_0),\,\forall x\in D\,\,\,(f(x)\leq f(x_0),\,\forall x\in D)$. Numărul $f(x_0)$ se numește *valoare minimă (maximă)* a funcției $f$.
$\geq$ Fie $f:\mathbb{R}\rightarrow\mathbb{R},\,f(x)=ax^2+bx+c,\,a,b,c\in\mathbb{R},\,a\neq 0$:
1) dacă $a>0$ atunci funcția $f$ are minim $x_{min}=-\frac b{2a}$ este punctul minim și $f(x)_{min}=-\frac \Delta{4a}$ este valoarea minimă a funcției
2) dacă $a<0$ atunci funcția $f$ are maxim, $x_{max}=-\frac b{2a}$ este punctul de maxim și $f(x)_{max}=-\frac \Delta{4a}$ este valoarea maximă a funcției

***Observații:*** $\begin{aligned}[t]&a>0\implies f(x)_{min}=-\frac \Delta{4a}\implies Im\,f=[-\frac \Delta{4a},+\infty) \\ &a<0\implies f(x)_{max}=-\frac \Delta{4a}\implies Im\,f=(-\infty,-\frac \Delta{4a}] \\ &x=-\frac b{2a}\text{ este axa de simetrie a }G_f\end{aligned}$
$\geq$ Graficul funcției de gradul al doilea este o curbă numită *parabolă*. Punctul $V(-\frac b{2a},-\frac \Delta{4a})$ se numește *vârful* parabolei. Graficul se intersectează ***tot timpul*** cu axa $Oy$ în punctul de coordonate $(0,f(0))$, iar intersecția cu axa $Ox$ acceptă ***trei cazuri:***
1) $\Delta<0:$ ecuația nu are soluții în $\mathbb{R}\implies G_f\cap Ox=\varnothing$
2) $\Delta=0:$ $x_1=x_2=-\frac b{2a}\implies G_f\cap Ox=V(-\frac b{2a},0)$, axa $Ox$ este ***tangentă*** la parabolă
3) $\Delta>0:$ $x_{1,2}=\frac{-b\pm\sqrt{\Delta}}{2a},\,x_1\neq x_2\implies G_f\cap Ox=\{A(x_1,0),\,B(x_2,0)\}$ 

***Observație:*** calculăm imaginile unor valori de o parte și de alta a vârfului pentru a desena parabola cât mai exact.
$\geq$ Dacă $a>0$ atunci funcția $f$ este strict descrescătoare pe $(-\infty,-\frac b{2a}]$ și strict crescătoare pe $[-\frac b{2a},\,+\infty)$. Dacă $a<0$ atunci funcția $f$ este strict crescătoare pe $(-\infty,-\frac b{2a}]$ și strict descrescătoare pe $[-\frac b{2a},+\infty)$. ***Observație:*** $f$ (orice funcție de gradul II) nu este monotonă pe $\mathbb{R}$.
$\geq$ *A stabili semnul funcției $f$* înseamnă a determina intervalele pe care funcția este positivă sau negativă. Intervalele acestea sunt dependente de semnul lui $\Delta$  și al lui $a$ după cum urmează:
1) $\Delta<0$: $\begin{aligned}[t] &a>0\implies f(x)>0,\,\forall x\in\mathbb{R} \\ &a<0\implies f(x)<0,\,\forall x\in\mathbb{R} \end{aligned}$
2) $\Delta=0$: $\begin{aligned}[t] &a>0\implies f(x)\geq 0,\,\forall x\in\mathbb{R} \\ &a<0\implies f(x)\leq 0,\,\forall x\in\mathbb{R} \end{aligned}$
3) $\Delta>0$: $\begin{aligned}[t] &x\in(-\infty,x_1)\cup(x_2,+\infty) \\ &a>0\implies f(x)>0 \\ &a<0\implies f(x)<0\end{aligned}$

$\geq$ Semnul unei funcții de gradul I urmează următoarele reguli: $\begin{aligned}[t] &x\in(-\infty,-\frac ba)\implies f(x)\text{ are semnul opus lui }a \\ &x\in(-\frac ba,+\infty)\implies f(x)\text{ are semnul lui }a \\ &x=-\frac ba\implies f(x)=0\end{aligned}$
$\geq$ În funcție de semnul lui $S$ și $P$ menționate anterior în cadrul relațiilor lui Viete putem stabili câteva relații între rădăcinile $x_1$ și $x_2$ ale unei ecuații de gradul II:$\begin{aligned}[t] &S>0,\,P>0\implies x_1<0,\,x_2>0 \\ &S<0,\,P>0\implies x_1<0,\,x_2<0 \\ &S>0,\,P<0\implies x_1<0,\,x_2>0,\,|x_2|>|x_1| \\ &S<0,\,P<0\implies x_1<0,\,x_2>0,\,|x_1|>|x_2|\end{aligned}$

**REZOLVAREA UNOR SISTEME DE DOUĂ ECUAȚII CU DOUĂ NECUNOSCUTE**
**sisteme formate dintr-o ecuație de gradul I și una de gradul II:** din ecuația de gradul I exprimăm o necunoscută în funcție de cealaltă, înlocuim în a doua ecuație
$\geq$ Prin *soluția unui sistem* înțelegem o pereche $(x_0,y_0)\in\mathbb{R}\times\mathbb{R}$ care verifică ambele ecuații ale sistemului. Soluțiile sistemului reprezintă intersecțiile dintre dreaptă și parabolă.
**sisteme omogene:**
$\geq$ O ecuație de forma $ax^2+bxy+cy^2=d,\,a,b,c,d\in\mathbb{R}$ se numește *ecuație omogenă* de gradul al doilea cu necunoscutele $x$ și $y$. Un sistem format din două eucații omogene se numește *sistem omogen*. Forma lui generală arată astfel: $(1)\begin{cases} ax^2+bxy+cy^2=d \\ mx^2+nxy+py^2=q\end{cases}$. Soluția sistemului $(1)$ este o pereche $(x_0,y_0)\in\mathbb{R}\times\mathbb{R}$. ***Observații:*** dacă $d=0$ sau $q=0$ atunci alegem acea ecuație și împărțim cu $y^2$ (sau descompunem în factori). Dacă $d\neq 0$ și $q\neq 0$ înmulțim convenabil ecuațiile și le adunăm-scădem astfel încât să obținem $0$ în dreapta.
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
$\overline{AB}\sim\overline{AB}$ (reflexitivitate)
$\overline{AB}\sim\overline{CD}\Longleftrightarrow\overline{CD}\sim\overline{AB}$ (simetrie)
$\left.\begin{aligned}\overline{AB}\sim\overline{CD}\\ \overline{CD}\sim\overline{EF}\end{aligned}\right\} \implies\overline{AB}\sim\overline{EF}\text{ (tranzitivitate)}$
$\geq$ Deoarece relația de echipolență este reflexivă, simetrică și tranzitivă, echipolența este și o relație de echivalență, ceea ce o determină să împartă mulțimea tuturor segmentelor orientate în *clase de echivalență*. ***Observație:*** pentru un segment orientat dat există o infinitate de segmente orientate echipolente cu el.
$\geq$ Mulțimea tuturor segmentelor orientate echipolente cu un segment orientat dat se numește *vector*. Vectorul este o clasă de echivalență. ***Observație:*** Oricare segment orientat este considerat *reprezentant* al vectorului: $\begin{aligned}[t]&\overline{AB}\text{ segment orientat}\\ &\overrightarrow{AB}\text{ vector (liber)}\\ &\overrightarrow{AB}=\{\overline{AB},\,\overline{CD},\,\overline{EF},\,...\}\end{aligned}$
$\geq$ Prin *modulul* sau *lungimea* vectorului $\overrightarrow{AB}$ înțelegem $|\overrightarrow{AB}|=AB=BA$.
$\geq$ Prin *direcția* vectorului $\overrightarrow{AB}$ înțelegem dreapta $AB$ și $(\forall)d\parallel AB$.
$\geq$ *Sensul* vectorului $\overrightarrow{AB}$ este de la $A$ la $B$, unde $A$ se numește *origine* și $B$ *vârf*. 
$\overrightarrow u=\overrightarrow v\Longleftrightarrow\begin{cases}\text{-au același modul: }|\overrightarrow u|=|\overrightarrow v|\\ \text{-au aceeași direcție}\\ \text{-au același sens}\end{cases}$ 
$\overrightarrow{AB}=\overrightarrow{CD}\Longleftrightarrow\begin{cases}AB=CD\\ AB\parallel CD\text{ sau }A,B,C,D\text{ coliniare}\\ B,D\text{ de aceeași parte al lui }AC\end{cases}$
***Observație:*** dacă $A,B,C,D$ nu sunt toate coliniare: $\overrightarrow{AB}=\overrightarrow{CD}\Longleftrightarrow ABDC\text{ paralelogram}$.
***Observație:*** dacă $A=B$, atunci $\overrightarrow{AB}=\overrightarrow{AA}=\overrightarrow 0$ (vector *nul*). Vectorul nul are următoarele proprietăți: direcția este orice dreaptă (nu este bine definită) și originea este egală cu vârful. 
$\left.\begin{aligned}\overrightarrow{AB}\\ \overrightarrow{BA}\end{aligned}\right\} \left.\begin{aligned}&\text{-același modul}\\ &\text{-aceeași direcție}\\ &\text{-sens opus} \end{aligned}\right\}$ vectori *opuși*
$-\overrightarrow v\longrightarrow\text{ opusul vectorului }\overrightarrow v;\,\,\overrightarrow{AB}=-\overrightarrow{BA}$.
