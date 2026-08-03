# ALGEBRĂ

**NUMERE REALE**
$\mathbb{N}=\{0,\,1,\,2,\,3,\,...\}$: mulțimea nr. *naturale*
$\mathbb{Z}=\mathbb{N}\cup\{-1,\,-2,\,-3,\,...\}=\{...,\,-3,\,-2,\,-1,\,0,\,1,\,2,\,3,\,...\}$: mulțimea nr. *întregi*
$\mathbb{Q}=\{\frac ab|\,a,\,b\in\mathbb{Z},\,b\neq0\}$: mulțimea nr. *raționale*
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
$\geq$ *Valorile de adevăr* sunt 
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
