const DIMENSIONS = [
  { key: 'wild', label: '山野', color: '#718f78', dark: '#243c35' },
  { key: 'culture', label: '人文', color: '#a86d54', dark: '#482f29' },
  { key: 'food', label: '烟火', color: '#e5674e', dark: '#4b271f' },
  { key: 'urban', label: '都市', color: '#56788e', dark: '#242d43' },
  { key: 'slow', label: '松弛', color: '#899a78', dark: '#344235' },
  { key: 'vitality', label: '活力', color: '#b05b74', dark: '#422733' }
];

const CHAPTERS = [
  {
    key: 'wild',
    title: '风从山野来',
    kicker: '山野',
    description: '关于你与山海、风和远方之间的距离',
    questions: [
      {
        title: '刚到一座陌生城市，酒店还不能入住，窗外天气很好。你会先做什么？',
        aside: '行李先寄存在前台，接下来的时间属于你。',
        options: [
          { text: '去近郊山里或海边走一圈', score: 5 },
          { text: '沿着江边、湖边慢慢散步', score: 4 },
          { text: '找高处看看城市全景', score: 2 },
          { text: '先去商圈找家咖啡馆坐坐', score: 0 }
        ]
      },
      {
        title: '原计划下午去城市展馆，但酒店旁就有一条很美的海边或山间步道。今天天气刚好，你会？',
        aside: '两个地方都想去，但时间只够认真选一个。',
        options: [
          { text: '改掉展馆，先去步道', score: 5 },
          { text: '上午步道，下午再赶展馆', score: 4 },
          { text: '先去展馆，傍晚看状态', score: 2 },
          { text: '按原计划，不去步道', score: 0 }
        ]
      },
      {
        title: '天气预报说旅程中有一天会下雨，你会怎么调整？',
        aside: '行程还没有完全定死，你还有改的余地。',
        options: [
          { text: '把户外行程提前，雨中也不放弃', score: 5 },
          { text: '留一个室内备选，但尽量靠近自然', score: 4 },
          { text: '改成博物馆或咖啡馆', score: 1 },
          { text: '这天就回酒店休息', score: 0 }
        ]
      },
{
        title: '在酒店房间看到一张周边徒步或海岸线地图，你会？',
        aside: '地图上标了几条不同长度的路线。',
        options: [
          { text: '马上研究路线，挑一条最想走的', score: 5 },
          { text: '先标一个最近的入口，有空再去', score: 4 },
          { text: '看一眼路线就放回去', score: 1 },
          { text: '对户外路线没兴趣', score: 0 }
        ]
      },
    ]
  },
  {
    key: 'culture',
    title: '时间的手艺',
    kicker: '人文',
    description: '关于旧墙、故事和一座城曾经的样子',
    questions: [
      {
        title: '博物馆只剩 40 分钟就要闭馆，你会怎么逛？',
        aside: '时间不够看完全部，只能做一个选择。',
        options: [
          { text: '选一个展厅认真看完', score: 5 },
          { text: '按重点展品快速走一圈', score: 4 },
          { text: '拍几张照片就离开', score: 1 },
          { text: '去文创店或咖啡馆', score: 0 }
        ]
      },
      {
        title: '同行的人想坐观光车绕古城一圈，你更想？',
        aside: '车会经过所有地标，但不会停下来太久。',
        options: [
          { text: '中途下车，走进小巷', score: 5 },
          { text: '坐一圈，听听讲解', score: 4 },
          { text: '在车上拍几张照片', score: 2 },
          { text: '直接去新城吃饭', score: 0 }
        ]
      },
{
        title: '旅行路过一家卖地方志和旧书的书店，你会？',
        aside: '店面不大，离下一个景点还有半小时。',
        options: [
          { text: '进去翻半小时，可能会买一本', score: 5 },
          { text: '快速挑一本小册子', score: 4 },
          { text: '拍门口的照片就走', score: 1 },
          { text: '不进去，继续赶路', score: 0 }
        ]
      },
      {
        title: '住进一间有百年历史的老宅，你第一眼会注意什么？',
        aside: '房间不大，但每个角落都有时间的痕迹。',
        options: [
          { text: '建筑年代、结构和旧物', score: 5 },
          { text: '光线、家具和陈设', score: 4 },
          { text: '床舒不舒服', score: 1 },
          { text: 'Wi-Fi 和插座够不够', score: 0 }
        ]
      }
    ]
  },
  {
    key: 'food',
    title: '一口人间',
    kicker: '烟火',
    description: '关于市场、餐桌和一座城真正的味道',
    questions: [
      {
        title: '抵达城市后的第一顿饭，你会怎么决定？',
        aside: '你饿了，但还不想随便对付。',
        options: [
          { text: '问本地人，去菜市场或小馆子', score: 5 },
          { text: '搜一份本地菜排行', score: 4 },
          { text: '找酒店附近评分最高的店', score: 2 },
          { text: '吃熟悉的连锁品牌', score: 0 }
        ]
      },
      {
        title: '同伴想随便吃点赶紧去景点，但你查到一家本地馆子要绕路 20 分钟。',
        aside: '景点预约时间还来得及，只是行程会紧一点。',
        options: [
          { text: '绕路去吃，来都来了', score: 5 },
          { text: '先看排队和营业情况再决定', score: 4 },
          { text: '少数服从多数，跟着走', score: 1 },
          { text: '快餐解决，不折腾', score: 0 }
        ]
      },
      {
        title: '夜市里已经很饱了，但看到一个从没吃过的小吃。',
        aside: '队伍不长，老板正在现做。',
        options: [
          { text: '买一份尝尝', score: 5 },
          { text: '看别人点什么再决定', score: 3 },
          { text: '拍张照就走', score: 1 },
          { text: '直接回酒店', score: 0 }
        ]
      },
{
        title: '旅行中吃到一家特别喜欢的早餐店，第二天还想去，但同伴想换新店。你会？',
        aside: '那家店要早起一点，而且不在原定路线上。',
        options: [
          { text: '还是再去一次，喜欢就值得', score: 5 },
          { text: '推荐给同伴，让对方决定', score: 4 },
          { text: '换一家试试，留点新鲜感', score: 2 },
          { text: '随便吃点，不折腾', score: 0 }
        ]
      },
    ]
  },
  {
    key: 'urban',
    title: '城市脉搏',
    kicker: '都市',
    description: '关于街区、建筑和一座城正在发生什么',
    questions: [
      {
        title: '第一次走进一座城市，哪种画面会让你觉得“来对了”？',
        aside: '车窗外的景色一闪而过。',
        options: [
          { text: '天际线、现代建筑和城市夜景', score: 5 },
          { text: '有设计感的街区和咖啡店', score: 4 },
          { text: '老街和旧房子', score: 1 },
          { text: '远处的山或海', score: 0 }
        ]
      },
      {
        title: '城市里只剩两小时，一场设计展和一条老街只能选一个。',
        aside: '一个更当代，一个更有生活气。',
        options: [
          { text: '去看设计展', score: 5 },
          { text: '去老街走走', score: 2 },
          { text: '看排队和距离再决定', score: 1 },
          { text: '回酒店休息', score: 0 }
        ]
      },
      {
        title: '住进一座城市，你最希望酒店楼下是什么？',
        aside: '下楼五分钟内能到的地方，会影响你对这座城的感觉。',
        options: [
          { text: '便利店、地铁和热闹商圈', score: 5 },
          { text: '咖啡店、买手店和小酒馆', score: 4 },
          { text: '老街和菜市场', score: 1 },
          { text: '公园、山或海', score: 0 }
        ]
      },
      {
        title: '旅行结束后，相册里最想留下的那张城市照片是？',
        aside: '只能选一张放进封面。',
        options: [
          { text: '现代建筑、天际线或霓虹夜景', score: 5 },
          { text: '咖啡店、橱窗和街区细节', score: 4 },
          { text: '老街上的普通人和生活', score: 1 },
          { text: '山、海、湖或大片自然', score: 0 }
        ]
      }
    ]
  },
  {
    key: 'slow',
    title: '留白处方',
    kicker: '松弛',
    description: '关于你愿意把多少时间，还给自己',
    questions: [
      {
        title: '玩到第三天，同伴想早起排队，你最真实的反应是？',
        aside: '前一天已经走了很多路。',
        options: [
          { text: '分开行动，自己晚点出门', score: 5 },
          { text: '一起去，但中途回酒店休息', score: 4 },
          { text: '勉强跟上，不想扫兴', score: 1 },
          { text: '早起一起排队', score: 0 }
        ]
      },
      {
        title: '有五天假期，你更愿意怎么安排住宿？',
        aside: '路线还没定，你有足够时间选一种方式。',
        options: [
          { text: '只住一个城市或地区', score: 5 },
          { text: '一个城市加一处近郊', score: 4 },
          { text: '两个城市，各住两晚', score: 2 },
          { text: '三四个城市连玩', score: 0 }
        ]
      },
      {
        title: '网红餐厅要排队 40 分钟，旁边正好有公园和书店。',
        aside: '这顿饭确实想吃，但不一定要一直站在门口。',
        options: [
          { text: '去公园或书店等，时间到了再回来', score: 5 },
          { text: '附近逛逛，偶尔回来看进度', score: 4 },
          { text: '原地刷手机等', score: 1 },
          { text: '直接换一家', score: 0 }
        ]
      },
      {
        title: '下面四种旅行安排，哪一种最让你难受？',
        aside: '选最不能接受的那个。',
        options: [
          { text: '每天七点起床赶景点', score: 5 },
          { text: '一整天什么计划都没有', score: 0 },
          { text: '一天换三个住处', score: 2 },
          { text: '在网红店排一小时队', score: 4 }
        ]
      }
    ]
  },
  {
    key: 'vitality',
    title: '入夜以后',
    kicker: '活力',
    description: '关于灯光亮起后，你的旅行电量还剩多少',
    questions: [
      {
        title: '晚上九点刚吃完晚饭，街上正热闹。你通常想？',
        aside: '酒店不远，明天也不用特别早起。',
        options: [
          { text: '去夜市、酒吧或演出继续玩', score: 5 },
          { text: '找个地方看夜景、散散步', score: 4 },
          { text: '回酒店看剧休息', score: 1 },
          { text: '早点睡，第二天早起', score: 0 }
        ]
      },
      {
        title: '旅行第三天下暴雨，原本的户外行程只能取消。朋友在群里发来四个临时方案，你最先回哪一个？',
        aside: '计划被打乱的时候，才看得出你真正想要怎样的快乐。',
        options: [
          { text: '去附近的大型室内乐园或主题乐园玩到晚上', score: 5, playTag: '乐园玩家', playNote: '为一场过山车，专门去一座城' },
          { text: '去看一场演出或电影', score: 5, playTag: '现场气氛组', playNote: '旅行里不能没有一场演出' },
          { text: '逛美术馆、展馆或室内展览', score: 4, playTag: '城市体验派', playNote: '展馆与街区就是目的地' },
          { text: '找一家咖啡馆或茶馆，坐到雨停', score: 2, playTag: '留白派', playNote: '不赶，坐着也很好' }
        ]
      },
      {
        title: '一个人旅行时，青旅公共区有人邀请你加入桌游。你会？',
        aside: '大家看起来都很放松，明早也没有硬性行程。',
        options: [
          { text: '马上加入，一起玩', score: 5 },
          { text: '先聊几句，看看气氛', score: 4 },
          { text: '礼貌拒绝，自己逛', score: 1 },
          { text: '回房间休息', score: 0 }
        ]
      },
{
        title: '坐长途高铁时，邻座乘客主动和你聊起旅行，你会？',
        aside: '车程还有两个多小时，对方看起来没有恶意。',
        options: [
          { text: '聊一路，顺便交换旅行推荐', score: 5 },
          { text: '聊一会儿，再看情况', score: 4 },
          { text: '礼貌回应后戴上耳机', score: 1 },
          { text: '尽量不交流', score: 0 }
        ]
      },
    ]
  }
];

const PERSONAS = {
  'wild+culture': {
    code: 'NO. 01', name: '山河旧梦家', pairLabel: '山野 × 人文',
    tagline: '有山有水的地方，最好也有一点旧故事。',
    keywords: ['旧城有风', '山河叙事', '慢慢读城'],
    description: '你总是被有故事的地形打动。对你来说，一座城最好既有山水的尺度，也有旧墙里的时间。你会为了山路上的一块旧碑停下，也会在古城边缘等一场日落。',
    avoid: ['只有网红装置、没有来处的新景区', '把历史做成布景、把人潮做成主角的地方', '一整天都在赶场式打卡'],
    style: ['古城加一处近郊山水', '至少留出一个清晨和一个黄昏', '住老城边缘，方便慢慢走'],
    insight: '你的山野与人文几乎并肩，风景对你来说不是背景，而是一段可以被走进去的故事。',
    shareQuote: '我的旅行不是换个地方打卡，是去有风的地方，读一点旧故事。'
  },
  'wild+food': {
    code: 'NO. 02', name: '山野寻味客', pairLabel: '山野 × 烟火',
    tagline: '风景要看，本地味道也不能错过。',
    keywords: ['山里有风', '市场有饭', '边走边吃'],
    description: '你不会在“看风景”和“吃好吃的”之间做选择。爬到半山腰会想找一家小馆，逛完菜市场又想看看城外的山。你的旅行地图，总是把风景和味道画在同一条线上。',
    avoid: ['只有风景、没有烟火的地方', '酒店自助三餐解决旅行', '一天排满景点，却没认真吃一顿饭'],
    style: ['自然景区搭配本地市场', '住在景区和旧城之间', '每座城至少留一顿“值得绕路”的饭'],
    insight: '山野让你愿意走远，烟火让你愿意留下。你的理想城市，最好风吹得到，饭香也闻得到。',
    shareQuote: '我要的旅行很简单：有山有风，也有一口真正属于当地的饭。'
  },
  'wild+urban': {
    code: 'NO. 03', name: '海岸线旅人', pairLabel: '山野 × 都市',
    tagline: '一半城市霓虹，一半山海晚风。',
    keywords: ['海边城市', '城市散步', '日落通勤'],
    description: '你喜欢那种“城市走几步就能看见海”或“抬头就能看见山”的地方。既能逛展、喝咖啡、看建筑，也能在傍晚突然拐去海边。你不是要逃离城市，而是想要一座有自然出口的城市。',
    avoid: ['完全没有自然出口的大城市', '信号和便利店都没有的纯野外', '只能在酒店与景点之间两点一线'],
    style: ['沿海或依山城市', '城市漫游加一段海边/山间路线', '留一个傍晚给天际线和风'],
    insight: '你不是纯粹的山野派，也不是彻头彻尾的都市派。你需要的是一座城市，同时容得下霓虹和晚风。',
    shareQuote: '一半城市霓虹，一半山海晚风。我的理想城市，最好两种都要。'
  },
  'wild+slow': {
    code: 'NO. 04', name: '山海出逃者', pairLabel: '山野 × 松弛',
    tagline: '把日程表留在城市，把呼吸带到山海。',
    keywords: ['为日落改路线', '人群过敏', '一城住三天'],
    description: '你不是不爱城市，只是旅行里的你不想再被时间追着跑。你会为一场日落等半小时，也会为了避开人群放弃一个“必去”。你真正想要的不是更多景点，而是一个可以慢慢呼吸的陌生地方。',
    avoid: ['一天五个打卡点', '全程住在最热闹的商圈', '早起赶路式旅行'],
    style: ['一座城市住三天', '每天最多两个主要目的地', '优先海边、山野、步行友好的小城'],
    insight: '你的山野值和松弛值并肩领先。你需要的不是更满的行程，而是一个能让你慢慢呼吸的地方。',
    shareQuote: '我的旅行不是看更多，是终于到一个没人催我的地方。'
  },
  'wild+vitality': {
    code: 'NO. 05', name: '山野充电站', pairLabel: '山野 × 活力',
    tagline: '白天走向山海，晚上还有电量。',
    keywords: ['白天进山', '晚上进城', '满格出发'],
    description: '你需要自然，但不是那种彻底断联的安静。白天的山风、海风和步道把你充满，晚上回到城里，你还想去夜市、喝酒或听一场演出。旅行对你来说，是把身体和情绪同时打开。',
    avoid: ['只能看风景、晚上无事可做', '全程躺平不动', '每天只安排一个室内景点'],
    style: ['白天自然、晚上城市', '住在自然景区与商圈之间', '适合有户外活动又有夜生活的城市'],
    insight: '你的山野与活力都很高。你要的不是静态度假，而是一种白天向外走、夜晚继续发光的旅行。',
    shareQuote: '白天去山里充电，晚上回城里放电。这种旅行，才让我满格。'
  },
  'culture+food': {
    code: 'NO. 06', name: '古城寻味人', pairLabel: '人文 × 烟火',
    tagline: '一边读旧城，一边吃到巷子深处。',
    keywords: ['旧墙有故事', '巷口有香味', '边走边读'],
    description: '你喜欢的城市要有来处，也要有人间气。白天看博物馆、老建筑，晚上钻进小馆子吃一顿当地菜。比起宏大的地标，你更在意一条街怎样被时间腌出味道。',
    avoid: ['只有仿古商业街、没有真实生活', '精致但不好吃的地方', '行程只有拍照和购物'],
    style: ['古城中心住两晚', '白天博物馆与老街，晚上小馆', '尽量步行，钻进支路'],
    insight: '人文给你方向，烟火给你温度。你最容易被一座“有旧故事、也有热饭菜”的城市打动。',
    shareQuote: '我想去的城，要有旧墙，也要有巷子深处飘出来的饭香。'
  },
  'culture+urban': {
    code: 'NO. 07', name: '旧城新潮客', pairLabel: '人文 × 都市',
    tagline: '喜欢有历史的天际线。',
    keywords: ['旧建筑新生活', '城市观察', '展馆漫游'],
    description: '你喜欢的不是单纯的古，也不是单纯的潮，而是两者叠在一起。老厂房变成美术馆，旧街区里开着新咖啡店，历史和当下在同一条路上发生。你对城市的审美，来自这种时间层次。',
    avoid: ['只有仿古、没有当代生活', '没有历史纹理的全新商业区', '为了打卡在不同景点间奔波'],
    style: ['历史街区加设计街区', '安排一个建筑或展览半日', '在城市里步行观察'],
    insight: '你的文人与都市值同时在线。旧的东西给你故事，新的事物给你呼吸，你属于有时间层次的城市。',
    shareQuote: '我喜欢有历史的天际线，也喜欢旧建筑里正在发生的新生活。'
  },
  'culture+slow': {
    code: 'NO. 08', name: '古城拾光者', pairLabel: '人文 × 松弛',
    tagline: '在旧墙和光影之间，把时间慢下来。',
    keywords: ['旧城散步', '一墙光影', '慢慢看展'],
    description: '你可以在一座古城里什么都不做，只是看墙上的光慢慢移过去。你喜欢历史，但不喜欢被讲解赶着走；你喜欢旧城，也想在旧城里坐下来喝一杯。你的旅行像在捡拾散落的时间。',
    avoid: ['在人潮里被推着走', '一天看五个历史景点', '把古城当成拍照背景板'],
    style: ['一座古城住两到三天', '清晨和傍晚各走一次老街', '给博物馆和茶馆各留半天'],
    insight: '人文与松弛让你对“慢”有更高的要求。你不只要看懂一座城，还要在旧墙边坐一会儿。',
    shareQuote: '我不赶着读懂一座城，我只想在旧墙和光影之间，坐一会儿。'
  },
  'culture+vitality': {
    code: 'NO. 09', name: '人文夜行家', pairLabel: '人文 × 活力',
    tagline: '白天读城，晚上听城。',
    keywords: ['白天看展', '晚上听现场', '城市不睡'],
    description: '你旅行时不太愿意早睡。白天逛博物馆、看老建筑，晚上去看演出、泡酒吧、逛夜市。对你来说，白天的城市是文本，夜晚的城市才是它的声音。',
    avoid: ['晚上九点就全部关门的城市', '只有古迹、没有当代生活', '每天按景点清单机械移动'],
    style: ['博物馆与夜生活同时安排', '住在交通方便的老城或商圈', '给夜晚留出完整时间'],
    insight: '你的人与活力值互相点亮。你不仅要读懂一座城的过去，也要听见它今晚的声音。',
    shareQuote: '白天的城市给我故事，夜晚的城市给我声音。我两个都要。'
  },
  'food+urban': {
    code: 'NO. 10', name: '城市觅食家', pairLabel: '烟火 × 都市',
    tagline: '用一顿饭认识一座城。',
    keywords: ['城市饭局', '街边小店', '边逛边吃'],
    description: '你喜欢有活力的城市，也相信一座城最诚实的部分在餐桌上。你会为了吃一顿饭跨半个城，也会在商圈和新街区之间寻找下一家小店。你的旅行路线，常常是几张餐厅和几个街区连起来的。',
    avoid: ['所有餐厅都在酒店里', '只有景点、没有街区生活', '为了打卡错过饭点'],
    style: ['住在商圈与老城交界', '一天安排两个街区、几顿饭', '把早餐和夜宵都当成正餐'],
    insight: '你的烟火与都市都很高。你适合那种街区密集、店铺丰富、随时能找到下一顿的城市。',
    shareQuote: '我认识一座城的方式，是从早餐开始，一直到夜宵。'
  },
  'food+slow': {
    code: 'NO. 11', name: '烟火慢食客', pairLabel: '烟火 × 松弛',
    tagline: '不赶路，只赶下一顿。',
    keywords: ['慢慢吃', '市场散步', '一城两三天'],
    description: '你旅行时不喜欢被时间催着走，更愿意把一整天过成几顿饭、几次散步和一段午睡。你喜欢有烟火气的城市，但不喜欢排队和喧闹，最好是在一家小馆坐下来，慢慢把一顿饭吃完。',
    avoid: ['一天赶五个景点', '只适合拍照的餐厅', '吃饭时间被行程切得很碎'],
    style: ['小城或老街区住三晚', '早市、午茶、晚饭各留足时间', '少换住处，多去同一家店两次'],
    insight: '烟火和松弛让你更在意“坐下来”的权利。你适合那种可以慢慢吃、慢慢逛、慢慢认识的地方。',
    shareQuote: '我不赶路，我只赶下一顿。旅行最好的安排，是坐下来好好吃饭。'
  },
  'food+vitality': {
    code: 'NO. 12', name: '夜市气氛组', pairLabel: '烟火 × 活力',
    tagline: '白天随便，晚上认真吃。',
    keywords: ['夜市集合', '人多热闹', '最后一场'],
    description: '你的旅行电量通常从傍晚开始上升。白天可以随便走走，晚上一定要去夜市、吃夜宵、找热闹。你喜欢和大家一起分享一桌菜，也喜欢那种“再逛一家就回去”的临时决定。',
    avoid: ['九点后街上没人', '一个人安静吃完晚饭', '旅游区专门给游客准备的套餐'],
    style: ['夜市与夜生活周边住宿', '晚餐后继续走一轮', '和朋友一起分享小份菜'],
    insight: '你的烟火和活力让夜晚变成旅行主舞台。你需要一条有得吃、有得逛、有人气的街。',
    shareQuote: '我的旅行天黑才正式开始。白天随便，晚上认真吃。'
  },
  'urban+slow': {
    code: 'NO. 13', name: '都市漫游家', pairLabel: '都市 × 松弛',
    tagline: '换座城市，过两天理想生活。',
    keywords: ['城市度假', '咖啡散步', '不赶景点'],
    description: '你喜欢城市，但不喜欢城市里的匆忙。你会挑一个街区住下来，早上找咖啡，下午逛店、看展、散步，晚上随便吃点。你不是来“完成”一座城市，而是来短暂地住进别人的日常。',
    avoid: ['每天换酒店、换城市', '所有时间都花在交通上', '把城市旅行过成景点考试'],
    style: ['选一个街区住两晚', '一天只安排一个核心目的地', '咖啡馆、展馆和散步串起来'],
    insight: '都市与松弛在你身上形成了一种很舒服的状态：你在城市里，但不被城市催着走。',
    shareQuote: '我不想完成一座城市，我只想在别人的日常里住两天。'
  },
  'urban+vitality': {
    code: 'NO. 14', name: '霓虹漫游者', pairLabel: '都市 × 活力',
    tagline: '越到夜里，城市越像我。',
    keywords: ['夜景上头', '城市夜行', '电量满格'],
    description: '你喜欢城市发光的时候。白天看展、逛店、走进陌生街区，晚上去看演出、喝酒、看夜景。你享受人群带来的能量，也喜欢在陌生城市里保持一点兴奋感。',
    avoid: ['晚上没有地方可去', '每天九点回酒店', '全程只在自然景区里移动'],
    style: ['城市中心或夜生活区住宿', '安排夜景、演出或酒吧', '白天城市漫游，晚上继续'],
    insight: '都市和活力让你的旅行电量持续到深夜。你属于灯光、街区、音乐和人声都还醒着的城市。',
    shareQuote: '越到夜里，城市越像我。我的旅行，天黑以后才真正开始。'
  },
  'slow+vitality': {
    code: 'NO. 15', name: '慢热夜行家', pairLabel: '松弛 × 活力',
    tagline: '白天慢慢来，晚上才开机。',
    keywords: ['午后开机', '夜宵收尾', '松弛有电'],
    description: '你不喜欢早起赶路，也不想把旅行过成睡觉。你白天需要足够的留白，到了晚上才愿意出门，去看夜景、吃夜宵或找一场演出。你的旅行节奏不是慢，而是从午后开始加速。',
    avoid: ['早上七点集合', '白天排满、晚上没电', '只能安静待在酒店'],
    style: ['上午留白，傍晚出门', '住在离夜市或商圈近的地方', '把一天的重心放在下午和晚上'],
    insight: '松弛与活力让你拥有一种特别的节奏：白天不急，晚上不困。你需要能慢下来、也能热闹起来的城市。',
    shareQuote: '白天慢慢来，晚上才开机。我的旅行，从下午开始进入状态。'
  }
};

const CITIES = [
  { id: 'dali', name: '大理', en: 'DALI', type: 'city', motif: 'lake', scores: { wild: 96, culture: 70, food: 68, urban: 38, slow: 96, vitality: 52 }, spot: '洱海生态廊道', experience: '傍晚骑行一段，等海面变成金色。', blurb: '苍山洱海之间，时间会自己慢下来。', tagline: '风、湖面和一场没有闹钟的早晨' },
  { id: 'guilin', name: '桂林', en: 'GUILIN', type: 'city', motif: 'karst', scores: { wild: 96, culture: 62, food: 72, urban: 42, slow: 88, vitality: 48 }, spot: '漓江竹筏（杨堤—兴坪段）', experience: '选上午首班，水面安静、光线最好。', blurb: '山水不是背景，是这座城的日常。', tagline: '在山水之间，把行程走慢一点' },
  { id: 'qingdao', name: '青岛', en: 'QINGDAO', type: 'city', motif: 'coast', scores: { wild: 82, culture: 62, food: 84, urban: 74, slow: 78, vitality: 68 }, spot: '小麦岛公园', experience: '日落前一小时到，带一块野餐垫等海面变色。', blurb: '海风、老建筑和一杯傍晚的啤酒。', tagline: '沿着海岸线，走到日落以后' },
  { id: 'xiamen', name: '厦门', en: 'XIAMEN', type: 'city', motif: 'island', scores: { wild: 74, culture: 58, food: 80, urban: 72, slow: 84, vitality: 66 }, spot: '鼓浪屿', experience: '坐第一班船上岛，趁人少走进老别墅小巷。', blurb: '海边的松弛感，藏在每一条小巷里。', tagline: '把一下午交给海风和旧街' },
  { id: 'chengdu', name: '成都', en: 'CHENGDU', type: 'city', motif: 'panda', scores: { wild: 60, culture: 70, food: 96, urban: 82, slow: 90, vitality: 88 }, spot: '成都大熊猫繁育研究基地', experience: '7:30 前后入园，先去看幼年熊猫。', blurb: '茶馆、火锅和不着急的下午。', tagline: '认真吃饭，也认真浪费时间' },
  { id: 'chongqing', name: '重庆', en: 'CHONGQING', type: 'city', motif: 'night', scores: { wild: 64, culture: 66, food: 95, urban: 88, slow: 58, vitality: 94 }, spot: '洪崖洞民俗风貌区', experience: '亮灯后从千厮门大桥方向看全景。', blurb: '山城夜色滚动，烟火从不打烊。', tagline: '在立体城市里，一直玩到深夜' },
  { id: 'changsha', name: '长沙', en: 'CHANGSHA', type: 'city', motif: 'mountain', scores: { wild: 36, culture: 58, food: 94, urban: 76, slow: 52, vitality: 92 }, spot: '岳麓山风景名胜区', experience: '傍晚坐索道上山，看完日落再慢慢下来。', blurb: '白天慢半拍，入夜满格电。', tagline: '为一口辣的，留到夜里再走' },
  { id: 'guangzhou', name: '广州', en: 'GUANGZHOU', type: 'city', motif: 'arcade', scores: { wild: 30, culture: 68, food: 96, urban: 90, slow: 58, vitality: 84 }, spot: '永庆坊', experience: '下午逛骑楼街区，傍晚顺便吃一顿老字号。', blurb: '一座可以用一整天认真吃饭的城。', tagline: '从早茶开始，到夜宵结束' },
  { id: 'xian', name: '西安', en: "XI'AN", type: 'city', motif: 'pagoda', scores: { wild: 38, culture: 96, food: 92, urban: 72, slow: 48, vitality: 82 }, spot: '大唐不夜城', experience: '天黑后去，看灯光和街头表演。', blurb: '城墙以内是历史，城墙以外是人间。', tagline: '在旧城里，从早吃到晚' },
  { id: 'nanjing', name: '南京', en: 'NANJING', type: 'city', motif: 'bridge', scores: { wild: 42, culture: 94, food: 78, urban: 76, slow: 66, vitality: 68 }, spot: '秦淮河夫子庙风光带', experience: '晚上坐一次画舫，看两岸灯影。', blurb: '梧桐影里，旧时光走得很慢。', tagline: '沿着梧桐和旧墙，慢慢走一天' },
  { id: 'suzhou', name: '苏州', en: 'SUZHOU', type: 'city', motif: 'garden', scores: { wild: 46, culture: 92, food: 72, urban: 62, slow: 82, vitality: 48 }, spot: '平江历史文化街区', experience: '清晨沿河走，避开下午人流。', blurb: '园林、巷子，和一整天的留白。', tagline: '在小巷和园林之间，坐一下午' },
  { id: 'hangzhou', name: '杭州', en: 'HANGZHOU', type: 'city', motif: 'lake', scores: { wild: 76, culture: 78, food: 74, urban: 82, slow: 74, vitality: 65 }, spot: '西湖风景名胜区', experience: '清晨骑行或日落前走一段苏堤。', blurb: '湖边散步，是最适合这里的旅行方式。', tagline: '城市很忙，但湖边可以很慢' },
  { id: 'shanghai', name: '上海', en: 'SHANGHAI', type: 'city', motif: 'skyline', scores: { wild: 25, culture: 78, food: 82, urban: 96, slow: 45, vitality: 90 }, spot: '外滩', experience: '日落后从北往南走，看两岸一起亮灯。', blurb: '霓虹、咖啡和永远逛不完的街区。', tagline: '在街区与夜色之间，一直走下去' },
  { id: 'beijing', name: '北京', en: 'BEIJING', type: 'city', motif: 'palace', scores: { wild: 35, culture: 96, food: 72, urban: 94, slow: 35, vitality: 82 }, spot: '故宫博物院', experience: '开门第一批进宫，先走中轴线再分流。', blurb: '古老与庞大，在同一条中轴线上相遇。', tagline: '在巨大的城市里，读很长的时间' },
  { id: 'sanya', name: '三亚', en: 'SANYA', type: 'city', motif: 'island', scores: { wild: 96, culture: 28, food: 62, urban: 60, slow: 90, vitality: 62 }, spot: '蜈支洲岛', experience: '早上上岛，先玩水上项目再慢慢看海。', blurb: '把日程表交给海浪和日落。', tagline: '把一天过成海风、沙滩和落日' },
  { id: 'lijiang', name: '丽江', en: 'LIJIANG', type: 'city', motif: 'snow', scores: { wild: 88, culture: 78, food: 62, urban: 45, slow: 92, vitality: 58 }, spot: '玉龙雪山', experience: '晴天早班索道，提前看天气和预约。', blurb: '雪山脚下，适合把时间过得很轻。', tagline: '看云、看雪山、看时间慢慢过去' },
  { id: 'kunming', name: '昆明', en: 'KUNMING', type: 'city', motif: 'bird', scores: { wild: 82, culture: 58, food: 82, urban: 62, slow: 86, vitality: 54 }, spot: '滇池海埂大坝', experience: '冬天上午喂海鸥，沿湖走到风小一点的地方。', blurb: '四季如春，连风都像在慢慢生活。', tagline: '在舒服的天气里，慢慢逛一整天' },
  { id: 'harbin', name: '哈尔滨', en: 'HARBIN', type: 'city', motif: 'snow', scores: { wild: 52, culture: 80, food: 78, urban: 70, slow: 62, vitality: 76 }, spot: '冰雪大世界', experience: '下午晚些入园，白天看冰雕，天黑后看灯光。', blurb: '冰雪与异域建筑，把冬天写成电影。', tagline: '在冷空气和灯光里，走很久' },
  { id: 'dunhuang', name: '敦煌', en: 'DUNHUANG', type: 'city', motif: 'desert', scores: { wild: 90, culture: 94, food: 52, urban: 32, slow: 78, vitality: 38 }, spot: '鸣沙山月牙泉', experience: '傍晚骑骆驼上山，日落后看月牙泉亮灯。', blurb: '沙漠、壁画和一场足够辽阔的日落。', tagline: '在壁画与沙漠之间，看一场落日' },
  { id: 'dalian', name: '大连', en: 'DALIAN', type: 'city', motif: 'coast', scores: { wild: 80, culture: 52, food: 76, urban: 68, slow: 76, vitality: 60 }, spot: '滨海路', experience: '傍晚走北大桥到燕窝岭一段，海风和落日最好。', blurb: '海边山城，浪漫得很安静。', tagline: '沿海边走，直到城市安静下来' },
  { id: 'shenzhen', name: '深圳', en: 'SHENZHEN', type: 'city', motif: 'park', scores: { wild: 52, culture: 45, food: 80, urban: 94, slow: 48, vitality: 92 }, spot: '深圳欢乐谷', experience: '预留一整天，开园就进，先玩人气项目。', blurb: '年轻、快速、永远还有下一场快乐。', tagline: '把一整天交给过山车和尖叫声' },
  { id: 'daxinganling', name: '大兴安岭', en: 'GREATER KHINGAN', type: 'wilderness', motif: 'forest', scores: { wild: 96, culture: 58, food: 42, urban: 18, slow: 90, vitality: 64 }, spot: '莫尔道嘎国家森林公园', experience: '秋天坐森林小火车，下午在林间步道等逆光。', blurb: '白桦林、河流和一整片安静的北方森林。', tagline: '把时间交给森林和风' },
  { id: 'meili', name: '梅里雪山', en: 'MEILI SNOW MOUNTAIN', type: 'wilderness', motif: 'snow', scores: { wild: 96, culture: 74, food: 38, urban: 12, slow: 82, vitality: 78 }, spot: '飞来寺观景台', experience: '前一晚住飞来寺，清晨等第一束光照到卡瓦格博。', blurb: '雪山、经幡和一场需要运气的日照金山。', tagline: '为一束清晨的光，住进雪山对面' }
];

const STORAGE_KEY = 'lvge_state_v2';
const SAMPLE_SCORES = { wild: 38, culture: 52, food: 80, urban: 94, slow: 42, vitality: 90 };

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const refs = {
  header: $('#siteHeader'),
  landing: $('#landingScreen'),
  test: $('#testScreen'),
  result: $('#resultScreen'),
  startButton: $('#startButton'),
  resumeButton: $('#resumeButton'),
  backButton: $('#backButton'),
  progressBar: $('#progressBar'),
  questionNumber: $('#questionNumber'),
  chapterKicker: $('#chapterKicker'),
  chapterTitle: $('#chapterTitle'),
  chapterStamps: $('#chapterStamps'),
  questionCard: $('#questionCard'),
  questionIndex: $('#questionIndex'),
  questionTitle: $('#questionTitle'),
  questionAside: $('#questionAside'),
  optionsGrid: $('#optionsGrid'),
  toast: $('#toast')
};

let state = {
  answers: Array(24).fill(null),
  current: 0,
  previewMode: false,
  currentScores: null,
  playStyle: null
};
let activeScreen = 'landing';
let activePersona = null;
let activeTopDims = null;
let activeEnergy = null;
let activePlay = null;
let activeCities = [];
let toastTimer = null;
let radarUid = 0;

function safeLoadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.answers) && saved.answers.length === 24) {
      state.answers = saved.answers;
      state.current = Math.min(Math.max(Number(saved.current) || 0, 0), 24);
      state.playStyle = saved.playStyle || null;
    }
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: state.answers, current: state.current, playStyle: state.playStyle }));
  } catch (error) {
    // Storage is optional; the test still works in private browsing.
  }
}

function hasProgress() {
  return state.answers.some(answer => answer !== null);
}

function updateResumeButton() {
  const show = hasProgress();
  refs.resumeButton.hidden = !show;
  refs.resumeButton.textContent = state.current >= 24 ? '查看上次结果' : '继续上次测试';
}

function setScreen(name) {
  activeScreen = name;
  [refs.landing, refs.test, refs.result].forEach(screen => screen.classList.remove('is-active'));
  const target = {
    landing: refs.landing,
    test: refs.test,
    result: refs.result
  }[name];
  if (!target) return;
  target.classList.add('is-active');
  refs.header.classList.toggle('on-inner', name !== 'landing');
  window.scrollTo(0, 0);
}

function getGlobalIndex(chapterIndex, questionIndex) {
  return chapterIndex * 4 + questionIndex;
}

function getChapterAndQuestion(index) {
  return { chapterIndex: Math.floor(index / 4), questionIndex: index % 4 };
}

function startNewTest() {
  state.answers = Array(24).fill(null);
  state.current = 0;
  state.previewMode = false;
  state.currentScores = null;
  state.playStyle = null;
  saveState();
  updateResumeButton();
  startTest();
}

function startTest() {
  setScreen('test');
  renderQuestion();
}

function renderQuestion() {
  if (state.current >= 24) {
    showResult(computeScores(state.answers));
    return;
  }

  const { chapterIndex, questionIndex } = getChapterAndQuestion(state.current);
  const chapter = CHAPTERS[chapterIndex];
  const question = chapter.questions[questionIndex];
  const dimension = DIMENSIONS.find(item => item.key === chapter.key);

  document.documentElement.style.setProperty('--accent', dimension.color);
  document.documentElement.style.setProperty('--accent-soft', `${hexToRgba(dimension.color, 0.12)}`);

  refs.chapterKicker.textContent = `第 ${chapterIndex + 1} 站 / 6`;
  refs.chapterTitle.textContent = chapter.title;
  refs.questionNumber.textContent = String(state.current + 1).padStart(2, '0');
  refs.questionIndex.textContent = `QUESTION ${String(state.current + 1).padStart(2, '0')}`;
  refs.questionTitle.textContent = question.title;
  refs.questionAside.textContent = question.aside || '';
  refs.progressBar.style.width = `${((state.current + 1) / 24) * 100}%`;
  refs.backButton.disabled = state.current === 0;

  refs.chapterStamps.innerHTML = CHAPTERS.map((item, index) => {
    const done = index < chapterIndex || (index === chapterIndex && questionIndex === 3 && state.answers[getGlobalIndex(index, 3)] !== null);
    const current = index === chapterIndex;
    return `<span class="stamp ${done ? 'done' : ''} ${current ? 'current' : ''}" title="${item.title}">${String(index + 1).padStart(2, '0')}</span>`;
  }).join('');

  const optionOrder = seededShuffle(question.options.length, state.current + 1);
  refs.optionsGrid.innerHTML = optionOrder.map((optionIndex, displayIndex) => {
    const option = question.options[optionIndex];
    return `
      <button class="option-button" data-option-index="${optionIndex}" aria-label="选项 ${String.fromCharCode(65 + displayIndex)}：${escapeHtml(option.text)}">
        <span class="option-letter">${String.fromCharCode(65 + displayIndex)}</span>
        <span class="option-text">${escapeHtml(option.text)}</span>
      </button>
    `;
  }).join('');

  refs.questionCard.classList.remove('swap-in');
  void refs.questionCard.offsetWidth;
  refs.questionCard.classList.add('swap-in');
}

function chooseOption(optionIndex) {
  const { chapterIndex, questionIndex } = getChapterAndQuestion(state.current);
  const chapter = CHAPTERS[chapterIndex];
  const option = chapter.questions[questionIndex].options[optionIndex];
  if (!option) return;

  const buttons = $$('.option-button', refs.optionsGrid);
  buttons.forEach(button => button.classList.remove('selected'));
  const selected = refs.optionsGrid.querySelector(`[data-option-index="${optionIndex}"]`);
  if (selected) selected.classList.add('selected');

  state.answers[state.current] = option.score;
  if (option.playTag) {
    state.playStyle = { tag: option.playTag, note: option.playNote };
  }
  state.current += 1;
  saveState();

  window.setTimeout(() => {
    refs.questionCard.classList.add('swap-out');
    window.setTimeout(() => {
      refs.questionCard.classList.remove('swap-out');
      if (state.current >= 24) {
        const scores = computeScores(state.answers);
        showResult(scores);
      } else {
        renderQuestion();
      }
    }, 180);
  }, 190);
}

function goBack() {
  if (state.current <= 0) return;
  state.current -= 1;
  saveState();
  renderQuestion();
}

function computeScores(answers) {
  const scores = {};
  CHAPTERS.forEach((chapter, chapterIndex) => {
    const values = chapter.questions
      .map((_, questionIndex) => answers[getGlobalIndex(chapterIndex, questionIndex)])
      .filter(value => typeof value === 'number');
    const average = values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
    scores[chapter.key] = Math.min(96, Math.max(20, Math.round(32 + average * 12.8)));
  });
  return scores;
}

function seededShuffle(length, seed) {
  const order = Array.from({ length }, (_, index) => index);
  let value = ((seed + 7) * 2654435761) >>> 0;
  for (let index = order.length - 1; index > 0; index -= 1) {
    value = (1664525 * value + 1013904223) >>> 0;
    const target = value % (index + 1);
    [order[index], order[target]] = [order[target], order[index]];
  }
  return order;
}

function selectPersona(scores) {
  const ordered = [...DIMENSIONS].sort((a, b) => {
    const scoreDiff = (scores[b.key] || 0) - (scores[a.key] || 0);
    if (scoreDiff !== 0) return scoreDiff;
    return DIMENSIONS.indexOf(a) - DIMENSIONS.indexOf(b);
  });
  const primary = ordered[0];
  const secondary = ordered[1];
  const keys = [primary.key, secondary.key].sort((a, b) => DIMENSIONS.findIndex(item => item.key === a) - DIMENSIONS.findIndex(item => item.key === b));
  const persona = PERSONAS[keys.join('+')] || PERSONAS['wild+slow'];
  return { persona, primary, secondary, ordered };
}

function scoreCities(scores, topKeys, playStyle) {
  const weights = Object.fromEntries(DIMENSIONS.map(dimension => [dimension.key, topKeys.includes(dimension.key) ? 1.35 : 1]));
  const weightTotal = DIMENSIONS.reduce((sum, dimension) => sum + weights[dimension.key], 0);

  const ranked = CITIES.filter(city => {
    if (city.type !== 'wilderness') return true;
    return scores.wild >= 78 && (scores.slow >= 65 || scores.vitality >= 75);
  }).map(city => {
    const distance = Math.sqrt(DIMENSIONS.reduce((sum, dimension) => {
      const difference = scores[dimension.key] - city.scores[dimension.key];
      return sum + weights[dimension.key] * difference * difference;
    }, 0) / weightTotal);
    let playBoost = 0;
    if (playStyle && playStyle.tag === '乐园玩家' && city.id === 'shenzhen') playBoost = 18;
    const fit = Math.max(55, Math.min(98, Math.round(100 - distance * 0.58 + playBoost)));
    return { ...city, fit };
  }).sort((a, b) => b.fit - a.fit);

  const selected = [];
  for (let round = 0; round < 3; round += 1) {
    let best = null;
    let bestAdjusted = -Infinity;
    ranked.forEach(city => {
      if (selected.some(item => item.id === city.id)) return;
      if (city.type === 'wilderness' && selected.some(item => item.type === 'wilderness')) return;
      let penalty = 0;
      selected.forEach(chosen => {
        const similarity = 100 - Math.sqrt(DIMENSIONS.reduce((sum, dimension) => {
          const difference = city.scores[dimension.key] - chosen.scores[dimension.key];
          return sum + difference * difference;
        }, 0) / DIMENSIONS.length);
        penalty = Math.max(penalty, similarity * (round === 1 ? 0.035 : round === 2 ? 0.095 : 0));
      });
      const adjusted = city.fit - penalty;
      if (adjusted > bestAdjusted) {
        bestAdjusted = adjusted;
        best = city;
      }
    });
    if (best) selected.push(best);
  }
  return selected;
}

function getCityReason(city, persona, index) {
  if (city.id === 'shenzhen' && activePlay && activePlay.tag === '乐园玩家') {
    return '你是乐园玩家，这里就是最值得专门为快乐去一次的地方。';
  }
  if (city.type === 'wilderness') {
    return '你想把时间交给旷野，这里的风景本身就是目的地。';
  }
  if (index === 0) return `${persona.primary.label}和${persona.secondary.label}，在这里都有落脚点。`;
  if (index === 1) return '和你同频，但节奏更轻一点，适合把行程留出空白。';
  return '换一种气质靠近它，也许会遇见你旅行里没发现的那一面。';
}

function cityMotifSVG(motif) {
  const draw = {
    lake: `<circle cx="53" cy="17" r="8"/><path d="M8 45l12-18 9 13 10-21 16 26"/><path d="M7 55c9-5 16-5 25 0s16 5 25 0 10-3 13-1M18 63h34"/>`,
    karst: `<path d="M7 55c4-18 11-18 15 0M22 55c6-27 14-27 20 0M42 55c5-19 12-19 17 0M6 61h60"/><path d="M25 60l7-4h12l8 4"/>`,
    coast: `<circle cx="53" cy="18" r="7"/><path d="M8 45c10-12 21-12 32 0M6 56c10-5 18-5 28 0s18 5 29 0M8 64c9-4 17-4 26 0"/><path d="M15 43V28h17l4 15"/>`,
    island: `<circle cx="52" cy="17" r="7"/><path d="M39 60c-5-15-4-25 2-34 5-8 10-11 16-12M39 60c4-8 9-12 17-13M39 60c8-11 17-17 28-17M26 60h40M9 61c8-4 15-4 23 0"/>`,
    panda: `<circle cx="22" cy="23" r="8"/><circle cx="50" cy="23" r="8"/><circle cx="36" cy="38" r="22"/><circle cx="28" cy="36" r="3"/><circle cx="44" cy="36" r="3"/><path d="M33 47c2 2 4 2 6 0M18 53c8 12 28 12 36 0"/>`,
    night: `<path d="M44 11c-8 5-9 18 1 23-10 2-19-6-18-16 0-5 3-10 8-13 3 4 6 5 9 6Z"/><path d="M7 62h58M13 62V35h14v27M29 62V45h13v17M45 62V28h15v34"/><path d="M18 43h4M34 53h3M50 38h5"/>`,
    mountain: `<path d="M5 57L27 20l12 22 8-13 20 28H5Z"/><path d="M20 42l7-8 7 9M40 40l4-5 6 7"/><circle cx="56" cy="15" r="6"/>`,
    arcade: `<path d="M8 29l28-15 28 15H8Z"/><path d="M13 29v34M34 29v34M59 29v34M7 63h58"/><path d="M18 39h11v10H18zM40 39h12v10H40zM24 58V46M47 58V46"/>`,
    pagoda: `<path d="M20 25h32M25 17h22M34 9h8M27 25v19M45 25v19M15 44h42M22 44v19M50 44v19M8 63h56"/><path d="M32 63V51h8v12"/>`,
    bridge: `<path d="M7 45c9-17 18-17 27 0M34 45c9-17 18-17 27 0M5 46h58M12 46v17M26 46v17M42 46v17M56 46v17M4 65c10-4 19-4 29 0s19 4 29 0"/><path d="M31 18v9M38 18v9"/>`,
    garden: `<circle cx="36" cy="35" r="24"/><path d="M19 56c5-14 8-22 16-29M31 38c8 1 13 5 16 12M25 28c-5-2-7-6-7-11 6 1 10 4 12 9M46 22c5-2 8-6 9-11 4 6 3 12-2 16"/>`,
    skyline: `<path d="M5 62h62M9 62V36h12v26M23 62V22h14v40M39 62V42h12v20M53 62V30h13v32"/><path d="M12 42h5M27 30h6M27 39h6M43 49h4M57 37h5M57 46h5"/>`,
    palace: `<path d="M10 31l26-15 26 15H10ZM17 31v28M29 31v28M43 31v28M55 31v28M7 63h58M22 22h29"/><path d="M29 59V46h14v13"/>`,
    snow: `<path d="M5 60L27 19l12 23 8-13 20 31H5Z"/><path d="M18 37l8-9 7 9M40 42l4-6 7 8M53 12v12M48 17h10M49 13l8 8M57 13l-8 8"/>`,
    bird: `<path d="M10 35c9-9 15-9 24 0 4-5 7-7 11-7-2 4-4 7-8 10M50 19c6 0 10 4 10 10s-4 10-10 10M7 53c10-5 18-5 28 0s18 5 28 0"/><path d="M26 62c5-6 9-8 14-8"/>`,
    desert: `<path d="M5 57c12-4 17-20 29-20 9 0 12 9 20 9 5 0 8-2 13-6v24H5Z"/><path d="M43 20a10 10 0 1 0 8 16 11 11 0 1 1-8-16Z"/><path d="M9 64c11-4 20-4 30 0s20 4 28 0"/>`,
    park: `<path d="M7 57c4-20 10-31 18-31 8 0 5 18 12 18 7 0 7-23 15-23 9 0 9 16 15 27"/><path d="M7 57h58M18 57v7M54 57v7"/><circle cx="25" cy="26" r="4"/><path d="M49 48h8l4 8H53Z"/>`,
    forest: `<path d="M14 54l10-26 10 26H14ZM39 54l11-32 11 32H39Z"/><path d="M24 54v11M50 54v11M7 65h58M18 41h12M44 38h12"/>`
  }[motif] || `<circle cx="36" cy="36" r="24"/><path d="M22 50l12-26 16 26H22Z"/>`;
  return `<svg viewBox="0 0 72 72" aria-hidden="true">${draw}</svg>`;
}

function showResult(scores, previewMode = false, playStyleOverride = null) {
  state.previewMode = previewMode;
  state.currentScores = scores;
  const found = selectPersona(scores);
  activePersona = found.persona;
  activeTopDims = { primary: found.primary, secondary: found.secondary };
  activePlay = playStyleOverride || state.playStyle || { tag: '城市体验派', note: '展馆与街区就是目的地' };
  activeCities = scoreCities(scores, [found.primary.key, found.secondary.key], activePlay);

  refs.header.classList.add('on-inner');
  $('#personaCode').textContent = `TRAVEL PERSONA / ${activePersona.code}`;
  $('#resultKicker').textContent = activePersona.pairLabel;
  $('#personaName').textContent = activePersona.name;
  $('#personaTagline').textContent = activePersona.tagline;
  $('#resultVertical').innerHTML = `${found.primary.label}<br />${found.secondary.label}`;
  $('#personaKeywords').innerHTML = activePersona.keywords.map(keyword => `<span>${escapeHtml(keyword)}</span>`).join('');
  $('#personaDescription').textContent = activePersona.description;
  $('#radarInsight').textContent = activePersona.insight;
  const energy = scores.vitality >= 75
    ? { className: 'high', tag: '高能量人', note: '越玩越有电' }
    : scores.vitality >= 55
      ? { className: 'mid', tag: '间歇性高能量人', note: '白天省电，晚上开机' }
      : { className: 'low', tag: '低能量人', note: '慢慢来，电量不多但很耐用' };
  activeEnergy = energy;
  const energyBadge = $('#energyBadge');
  energyBadge.className = `energy-badge ${energy.className}`;
  $('#energyTag').textContent = energy.tag;
  $('#energyNote').textContent = energy.note;
  $('#playTag').textContent = activePlay.tag;
  $('#playBadge').title = activePlay.note;

  renderRadar($('#resultRadar'), scores, { width: 640, showValues: true });
  renderCityCards();
  renderSharePreview(scores);

  setScreen('result');
  updateResumeButton();
}

function renderCityCards() {
  const ranks = ['BEST MATCH', 'ALSO FOR YOU', 'WILD CARD'];
  $('#cityGrid').innerHTML = activeCities.map((city, index) => {
    const typeLabel = city.type === 'wilderness' ? 'WILDERNESS DESTINATION' : 'CITY DESTINATION';
    return `
      <article class="city-card" style="--city-color: ${hexToRgba(DIMENSIONS[index % DIMENSIONS.length].color, 0.3)}">
        <div class="city-rank">${ranks[index]}<div class="city-type">${typeLabel}</div></div>
        <div class="city-match">${city.fit}<small>%</small></div>
        <div class="city-doodle">${cityMotifSVG(city.motif)}</div>
        <div>
          <h3>${escapeHtml(city.name)}</h3>
          <div class="city-en">${escapeHtml(city.en)}</div>
          <p class="city-reason">${escapeHtml(getCityReason(city, activeTopDims, index))}</p>
          <div class="city-spot">
            <span class="city-spot-label">只推荐这一处 / ONE PLACE</span>
            <strong>${escapeHtml(city.spot)}</strong>
            <p>${escapeHtml(city.experience)}</p>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderSharePreview(scores) {
  $('#previewCode').textContent = activePersona.code;
  $('#previewName').textContent = activePersona.name;
  $('#previewTagline').innerHTML = activePersona.tagline.replace('，', '，<br />');
  $('#previewEnergy').textContent = `${activeEnergy.tag} · ${activePlay.tag}`;
  renderRadar($('#previewRadar'), scores, { width: 230, compact: true, showValues: false });
  $('#previewCities').innerHTML = activeCities.map(city => `<span>${city.name} ${city.fit}%</span>`).join('');
}

function radarSVG(scores, options = {}) {
  const width = options.width || 460;
  const height = width;
  const cx = width / 2;
  const cy = height / 2;
  const radius = width * 0.31;
  const labelRadius = radius + width * 0.115;
  const uid = `radar-${++radarUid}`;
  const baseAngle = -Math.PI / 2;
  const pointAt = (index, value) => {
    const angle = baseAngle + (Math.PI * 2 * index) / 6;
    const distance = radius * (Math.max(0, Math.min(100, value)) / 100);
    return [cx + Math.cos(angle) * distance, cy + Math.sin(angle) * distance];
  };
  const labelAt = index => {
    const angle = baseAngle + (Math.PI * 2 * index) / 6;
    return [cx + Math.cos(angle) * labelRadius, cy + Math.sin(angle) * labelRadius];
  };
  const polygon = values => values.map((value, index) => pointAt(index, value).join(',')).join(' ');
  const grids = [20, 40, 60, 80, 100].map(level => `<polygon points="${polygon(Array(6).fill(level))}" class="radar-grid" />`).join('');
  const axes = DIMENSIONS.map((_, index) => {
    const point = pointAt(index, 100);
    return `<line x1="${cx}" y1="${cy}" x2="${point[0]}" y2="${point[1]}" class="radar-axis" />`;
  }).join('');
  const values = DIMENSIONS.map(dimension => scores[dimension.key] || 0);
  const dataPoints = values.map((value, index) => pointAt(index, value));
  const labels = DIMENSIONS.map((dimension, index) => {
    const [x, y] = labelAt(index);
    const anchor = Math.abs(x - cx) < 10 ? 'middle' : x < cx ? 'end' : 'start';
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" class="radar-label">${dimension.label}</text>`;
  }).join('');
  const points = dataPoints.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${options.compact ? 3.1 : 4.2}" class="radar-point" />`).join('');
  const scoreFontSize = width * 0.041;
  const scoreBadges = options.showValues ? DIMENSIONS.map((dimension, index) => {
    const [x, y] = pointAt(index, 89);
    const value = scores[dimension.key] || 0;
    return `<text x="${x}" y="${y + scoreFontSize * 0.34}" text-anchor="middle" class="radar-score" style="font-size:${scoreFontSize}px">${value}</text>`;
  }).join('') : '';
  const fontScale = options.compact ? 0.85 : 1;

  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="六维旅行人格雷达图" style="--radar-font-scale:${fontScale}">
      <defs>
        <radialGradient id="${uid}" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#f2b29a" stop-opacity="0.72"/>
          <stop offset="100%" stop-color="#cf644e" stop-opacity="0.34"/>
        </radialGradient>
      </defs>
      ${grids}${axes}
      <polygon points="${dataPoints.map(point => point.join(',')).join(' ')}" fill="url(#${uid})" class="radar-data" />
      ${points}${scoreBadges}${labels}
    </svg>
  `;
}

function renderRadar(container, scores, options = {}) {
  if (!container) return;
  container.innerHTML = radarSVG(scores, options);
}

function buildShareText() {
  const scores = state.currentScores;
  const cityText = activeCities.map(city => city.name).join('、');
  const topScores = [...DIMENSIONS].sort((a, b) => scores[b.key] - scores[a.key]).slice(0, 2);
  return `测出我是「${activePersona.name}」。\n\n${activeEnergy.tag}，${activePlay.tag}。\n${topScores[0].label}值 ${scores[topScores[0].key]}，${topScores[1].label}值 ${scores[topScores[1].key]}。\n\n${activePersona.shareQuote}\n\n我的适配目的地：${cityText}。\n\n#旅行人格测试 #城市旅行 #周末去哪儿 #旅格`;
}

async function copyShareText() {
  const text = buildShareText();
  try {
    await navigator.clipboard.writeText(text);
    showToast('分享文案已复制，可以去小红书发布了');
  } catch (error) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    showToast('分享文案已复制');
  }
}

function showToast(message) {
  refs.toast.textContent = message;
  refs.toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => refs.toast.classList.remove('show'), 2400);
}

function drawRoundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const characters = [...text];
  const lines = [];
  let line = '';
  characters.forEach(character => {
    const test = line + character;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = character;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  lines.slice(0, maxLines).forEach((value, index) => {
    const output = index === maxLines - 1 && lines.length > maxLines ? `${value.slice(0, -1)}…` : value;
    ctx.fillText(output, x, y + index * lineHeight);
  });
  return Math.min(lines.length, maxLines);
}

function drawCanvasRadar(ctx, scores, cx, cy, radius) {
  const angleStart = -Math.PI / 2;
  const point = (index, value) => {
    const angle = angleStart + (Math.PI * 2 * index) / 6;
    const length = radius * value / 100;
    return [cx + Math.cos(angle) * length, cy + Math.sin(angle) * length];
  };

  for (let level = 1; level <= 5; level += 1) {
    ctx.beginPath();
    for (let index = 0; index < 6; index += 1) {
      const [x, y] = point(index, level * 20);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(32,29,25,0.15)';
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }

  for (let index = 0; index < 6; index += 1) {
    const [x, y] = point(index, 100);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'rgba(32,29,25,0.13)';
    ctx.stroke();
  }

  const values = DIMENSIONS.map(dimension => scores[dimension.key] || 0);
  ctx.beginPath();
  values.forEach((value, index) => {
    const [x, y] = point(index, value);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(207,100,78,0.28)';
  ctx.fill();
  ctx.strokeStyle = '#c95840';
  ctx.lineWidth = 3;
  ctx.stroke();

  values.forEach((value, index) => {
    const [x, y] = point(index, value);
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#c95840';
    ctx.fill();
    ctx.strokeStyle = '#f7eee2';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  DIMENSIONS.forEach((dimension, index) => {
    const angle = angleStart + (Math.PI * 2 * index) / 6;
    const lx = cx + Math.cos(angle) * (radius + 53);
    const ly = cy + Math.sin(angle) * (radius + 49);
    ctx.fillStyle = '#201d19';
    ctx.font = '500 22px "Songti SC", "STSong", serif';
    ctx.textAlign = Math.abs(lx - cx) < 8 ? 'center' : lx < cx ? 'right' : 'left';
    ctx.fillText(dimension.label, lx, ly);
    ctx.fillStyle = '#c95840';
    ctx.font = '600 15px "Avenir Next", sans-serif';
    ctx.fillText(String(scores[dimension.key] || 0), lx, ly + 21);
  });
}

function downloadShareCard() {
  if (!activePersona || !state.currentScores) return;
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1440;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f7eee2';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const backgroundGradient = ctx.createRadialGradient(900, 240, 30, 900, 240, 450);
  backgroundGradient.addColorStop(0, 'rgba(229,103,78,0.55)');
  backgroundGradient.addColorStop(1, 'rgba(229,103,78,0)');
  ctx.fillStyle = backgroundGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'rgba(32,29,25,0.18)';
  ctx.lineWidth = 2;
  ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

  ctx.fillStyle = '#201d19';
  ctx.font = '600 18px "Avenir Next", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('旅格 / TRAVEL PERSONA', 72, 90);
  ctx.textAlign = 'right';
  ctx.fillStyle = '#6f655b';
  ctx.font = '500 16px "Avenir Next", sans-serif';
  ctx.fillText(activePersona.code, 1008, 90);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#c95840';
  ctx.font = '500 19px "PingFang SC", sans-serif';
  ctx.fillText(`${activePersona.pairLabel}   ·   ${activeEnergy.tag} / ${activePlay.tag}`, 72, 170);

  ctx.fillStyle = '#201d19';
  ctx.font = '400 98px "Songti SC", "STSong", serif';
  ctx.fillText(activePersona.name, 66, 282);

  ctx.fillStyle = '#5f584f';
  ctx.font = '400 33px "Songti SC", "STSong", serif';
  wrapCanvasText(ctx, activePersona.tagline, 72, 344, 870, 49, 2);

  drawCanvasRadar(ctx, state.currentScores, 540, 690, 178);

  ctx.strokeStyle = 'rgba(32,29,25,0.16)';
  ctx.beginPath();
  ctx.moveTo(72, 1040);
  ctx.lineTo(1008, 1040);
  ctx.stroke();

  ctx.textAlign = 'left';
  ctx.fillStyle = '#c95840';
  ctx.font = '500 18px "PingFang SC", sans-serif';
  ctx.fillText('THE WORDS THAT FIND YOU', 72, 1092);
  ctx.fillStyle = '#201d19';
  ctx.font = '400 34px "Songti SC", "STSong", serif';
  wrapCanvasText(ctx, activePersona.shareQuote, 72, 1143, 860, 49, 2);

  ctx.fillStyle = '#6f655b';
  ctx.font = '500 17px "PingFang SC", sans-serif';
  ctx.fillText('适配目的地', 72, 1248);
  let pillX = 72;
  activeCities.forEach(city => {
    const label = `${city.name} ${city.fit}%`;
    ctx.font = '500 20px "PingFang SC", sans-serif';
    const width = ctx.measureText(label).width + 40;
    ctx.strokeStyle = 'rgba(32,29,25,0.22)';
    drawRoundRect(ctx, pillX, 1271, width, 50, 25);
    ctx.stroke();
    ctx.fillStyle = '#201d19';
    ctx.fillText(label, pillX + 20, 1304);
    pillX += width + 12;
  });

  ctx.fillStyle = '#8c8175';
  ctx.font = '500 13px "Avenir Next", "PingFang SC", sans-serif';
  ctx.fillText('24 个旅行瞬间 · 测出你的城市与旷野人格', 72, 1375);
  ctx.textAlign = 'right';
  ctx.fillText('LVGE / TRAVEL PERSONA', 1008, 1375);

  const link = document.createElement('a');
  link.download = `旅格-${activePersona.name}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('人格卡片已生成');
}

function goHome() {
  setScreen('landing');
  updateResumeButton();
}

function restart() {
  localStorage.removeItem(STORAGE_KEY);
  startNewTest();
}

function resume() {
  if (state.current >= 24) {
    showResult(computeScores(state.answers));
  } else {
    startTest();
  }
}

function preview() {
  state.previewMode = true;
  showResult({ ...SAMPLE_SCORES }, true, { tag: '乐园玩家', note: '为一场过山车，专门去一座城' });
}

function openSampleWithoutState() {
  preview();
}

function hexToRgba(hex, alpha) {
  const value = hex.replace('#', '');
  const bigint = parseInt(value.length === 3 ? value.split('').map(character => character + character).join('') : value, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

document.addEventListener('click', event => {
  const actionTarget = event.target.closest('[data-action]');
  if (actionTarget) {
    const action = actionTarget.dataset.action;
    if (action === 'start') startNewTest();
    if (action === 'resume') resume();
    if (action === 'back') goBack();
    if (action === 'home') goHome();
    if (action === 'preview') preview();
    if (action === 'download') downloadShareCard();
    if (action === 'copy') copyShareText();
    if (action === 'restart') restart();
    return;
  }

  const option = event.target.closest('[data-option-index]');
  if (option && activeScreen === 'test') {
    chooseOption(Number(option.dataset.optionIndex));
  }
});

window.addEventListener('scroll', () => {
  refs.header.classList.toggle('scrolled', window.scrollY > 16);
}, { passive: true });

safeLoadState();
updateResumeButton();
