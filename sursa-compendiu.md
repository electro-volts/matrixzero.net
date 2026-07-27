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
