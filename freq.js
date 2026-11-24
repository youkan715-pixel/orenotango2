// 頻出単語のデータ。_tools/freq.js が書き出すので、このファイルは直接書き換えない。元は _tools/freq/*.txt。
// 語の一覧と順位: TOEIC Service List 1.2 (Browne, C. & Culligan, B., 2016) www.newgeneralservicelist.com — CC BY-SA 4.0
const FREQ = `
# 1〜100
mister|～さん、～氏（Mr.）（男性への敬称）
vacation|休暇
client|顧客、依頼人
e-book|電子書籍
airport|空港
memo|社内連絡、メモ
reservation|予約
logical|論理的な、筋の通った
fax|ファックス（で送る）
o'clock|～時
sincerely|心から、敬具
sometime|いつか、そのうち
supervisor|上司、監督者
refund|返金（する）
goods|商品、品物
workshop|研修会、作業場
downtown|中心街（に）
deadline|締め切り
invoice|請求書
brochure|パンフレット、小冊子
noon|正午
accountant|会計士、経理担当者
clerk|店員、事務員
lobby|ロビー
publish|出版する、公表する
résumé|履歴書
enclose|同封する
applicant|応募者、志願者
seminar|セミナー、講習会
technician|技術者、技師
cloth|布
fare|運賃
receipt|領収書、レシート
traveler|旅行者
caller|電話をかけてきた人
subway|地下鉄
luggage|手荷物
shipment|発送、積み荷
infer|推測する
waiter|ウェイター
rental|賃貸、レンタル（の）
warranty|保証（書）
cafeteria|社員食堂、カフェテリア
chef|料理長、シェフ
elevator|エレベーター
reception|受付、歓迎会
correctly|正しく
lease|賃貸借契約、賃貸する
bicycle|自転車
notify|知らせる、通知する
preview|試写、下見（する）
attendant|係員、接客係
subscription|定期購読、定額利用
convenient|便利な、都合のよい
manual|説明書、手動の
clue|手がかり
garage|車庫、修理工場
obtain|手に入れる、取得する
oval|楕円形（の）
inventory|在庫、棚卸し
outdoor|屋外の
suitcase|スーツケース
destination|目的地
occupation|職業
postpone|延期する
contradict|矛盾する、反論する
umbrella|傘
inference|推論、推測
cellphone|携帯電話
compact|小型の、コンパクトな
merchandise|商品
receptionist|受付係
dentist|歯科医
identification|身分証明（書）
coupon|割引券、クーポン
depart|出発する
reschedule|予定を変更する
tactic|戦術、作戦
renovation|改装、改修
upgrade|性能を上げる、格上げ（する）
precede|～に先立つ
replacement|交換（品）、後任
dine|食事をする
passport|パスポート
coworker|同僚
upcoming|近く行われる、今度の
cabinet|戸棚、キャビネット
appliance|電化製品、器具
explanatory|説明的な
instructor|講師、指導者
keyboard|キーボード
media|報道機関、媒体
supermarket|スーパーマーケット
valid|有効な
admission|入場（料）、入学
laptop|ノートパソコン
underline|下線を引く、強調する
electrical|電気の
airplane|飛行機
assignment|任務、課題
# 101〜200
exit|出口、退出する
attendee|出席者、参加者
cruise|船旅、巡航する
birthday|誕生日
café|カフェ、喫茶店
comprehension|理解（力）
mall|ショッピングモール
medication|薬、薬物治療
recycle|再利用する、リサイクルする
renew|更新する
tenant|賃借人、入居者
sandwich|サンドイッチ
departure|出発
mini|小型の
fitness|健康、体力づくり
inconvenience|不便、迷惑（をかける）
banquet|宴会、祝宴
closet|クローゼット、収納室
unreal|現実離れした、信じられない
distractor|（選択問題の）誤答の選択肢
expire|期限が切れる
folder|書類ばさみ、フォルダー
photocopy|コピー（する）
renovate|改装する、改修する
sunny|晴れた
calendar|カレンダー、予定表
donation|寄付
feedback|意見、感想
shortly|まもなく
snack|軽食、おやつ
warehouse|倉庫
copier|コピー機
provider|供給業者、提供者
beverage|飲み物
hungry|空腹の
inspection|検査、点検
recipient|受取人、受賞者
aisle|通路
inspect|検査する、点検する
mechanic|整備士、修理工
merger|合併
soccer|サッカー
sweater|セーター
ingredient|材料、成分
rewrite|書き直す
itinerary|旅程（表）
workplace|職場
architect|建築家
convenience|便利さ、好都合
eligible|資格のある
indoor|屋内の
baggage|手荷物
dial|電話をかける、ダイヤル
container|容器、コンテナ
drawer|引き出し
lab|実験室、研究室
submission|提出（物）
bulletin|掲示、広報、速報
certificate|証明書、修了証
gym|体育館、ジム
highway|幹線道路
respondent|回答者
jewelry|宝石類、装身具
overtime|残業、時間外（で）
battery|電池、バッテリー
donate|寄付する
outstanding|優れた、未払いの
skim|ざっと読む
briefcase|書類かばん
dessert|デザート
impact|影響、衝撃
innovative|革新的な
inquire|問い合わせる、尋ねる
overnight|一晩（の）、翌日配達の
venue|会場、開催地
commuter|通勤者
logo|ロゴ、商標
newsletter|会報、社内報
advisor|顧問、助言者
cartridge|カートリッジ
cloudy|曇った
photographer|写真家、カメラマン
shopper|買い物客
tag|札、値札
announcer|アナウンサー
aspect|側面、局面
audit|監査（する）
contractor|請負業者
download|ダウンロードする
password|パスワード
prohibit|禁止する
stadium|競技場、スタジアム
terminal|ターミナル、端末
weekday|平日
bonus|賞与、特典
cart|カート、手押し車
delicious|おいしい
ink|インク
supervise|監督する、管理する
waitress|ウェイトレス
# 201〜300
cleaner|清掃員、洗剤、クリーニング店
developer|開発者、開発業者
headquarter|本社を置く
shuttle|定期往復便、シャトルバス
stationery|文房具、便せん
subscribe|定期購読する、加入する
alike|似ている、同様に
flavor|味、風味
picnic|ピクニック、野外での食事
recipe|調理法、レシピ
refreshment|軽い飲食物
administrative|管理の、事務の
authorize|許可する、権限を与える
commonly|一般に、よく
distribution|配布、流通
sofa|ソファ
accommodate|収容する、要望に応じる
affordable|手ごろな価格の
annoy|いらいらさせる、悩ませる
commute|通勤（する）
coordinate|調整する、まとめる
paperwork|事務書類、書類仕事
quit|辞める、やめる
authority|権限、当局
flu|インフルエンザ
captain|機長、船長、主将
installation|設置、取り付け
trainer|指導員、トレーナー
availability|利用できること、空き状況
bargain|お買い得品、交渉する
complimentary|無料の、称賛の
hike|ハイキング（する）、引き上げ
midnight|真夜中、午前零時
productivity|生産性
rainy|雨の
relocate|移転する、転勤させる
trainee|研修生、訓練生
transaction|取引
unhappy|不満な、不幸な
verify|確かめる、証明する
automobile|自動車
courier|宅配業者、配達人
incomplete|不完全な、未完成の
questionnaire|アンケート用紙
baseball|野球
dock|波止場、荷物の積み下ろし場
lamp|ランプ、電気スタンド
lately|最近
machinery|機械類
presenter|発表者、司会者
seldom|めったに～ない
signature|署名
worldwide|世界中に（の）
carrier|運送会社、航空会社
designate|指定する、指名する
exclusive|独占的な、限定の
grocery|食料品（店）
homework|宿題、下調べ
memorandum|社内連絡、覚書
photocopier|コピー機
suite|スイートルーム、一続きの部屋
thorough|徹底的な、完全な
bookstore|書店
cater|料理を仕出しする、要望に応える
dental|歯の、歯科の
duration|期間、継続時間
lounge|待合室、ラウンジ
painter|画家、塗装工
patron|ひいき客、利用者、後援者
prescription|処方箋、処方薬
productive|生産的な、実りのある
salad|サラダ
stack|積み重ねる、山
delegate|代表者、委任する
salesperson|販売員
calculator|計算機、電卓
completion|完成、完了
defect|欠陥、不具合
garbage|ごみ
omit|省く、抜かす
spite|（in spite of で）～にもかかわらず
bathroom|浴室、トイレ
cab|タクシー
correspondence|通信、文書のやり取り
ladder|はしご
photography|写真撮影、写真術
sculpture|彫刻
anniversary|記念日、～周年
buffet|ビュッフェ、立食
defective|欠陥のある
ice cream|アイスクリーム
leak|漏れ（る）
occupancy|占有、入居、利用率
proficiency|熟達、技能
renewal|更新、再開発
urgent|緊急の
annually|年に一度、毎年
basketball|バスケットボール
delete|削除する
illogical|非論理的な、不合理な
# 301〜400
pet|ペット
textbook|教科書
accurately|正確に
cabin|客室、小屋
conductor|車掌、指揮者
inspector|検査官
intern|実習生、インターン
semester|学期
confirmation|確認（書）
congratulation|祝い、おめでとう
expertise|専門知識、専門技術
graph|グラフ
taker|受ける人、受験者
utility|公共料金、（電気・ガス・水道の）公益事業
voucher|引換券、割引券
banker|銀行員、銀行家
behalf|（on behalf of で）～を代表して
minimize|最小限にする
optional|任意の、選択できる
paycheck|給料（小切手）
polite|丁寧な、礼儀正しい
protective|保護用の
seller|売り手、販売者
sidewalk|歩道
sightsee|観光する
soup|スープ
transit|輸送、交通機関
wallet|財布
cashier|レジ係、会計係
casual|普段着の、気軽な
drill|訓練、ドリル、穴を開ける
fountain|噴水、水飲み場
juice|ジュース
lane|車線、小道
popularity|人気
poster|ポスター
promptly|すぐに、時間どおりに
retailer|小売業者
vacancy|空室、欠員
bench|ベンチ
cumulative|累積の
directory|名簿、住所録
disposal|処分、廃棄
housekeeper|客室係、家政婦
internship|実務研修、インターンシップ
knowledgeable|知識の豊富な
organizer|主催者、まとめ役
overdue|期限を過ぎた
prediction|予測、予想
subscriber|購読者、加入者
booklet|小冊子
conditioner|（air conditioner で）エアコン、調整するもの
enroll|登録する、入会する
frustrate|いらだたせる、挫折させる
garment|衣服
orientation|説明会、方向づけ
outlet|直販店、コンセント、出口
packet|小包、一包み、資料一式
plumber|配管工
specification|仕様（書）
auto|自動車（の）
decorate|飾る、内装を施す
deduction|控除、差し引き
definite|明確な、確実な
economical|経済的な、節約になる
efficiently|効率よく
flyer|ちらし、ビラ
franchise|フランチャイズ、営業権
generous|気前のよい、寛大な
interrupt|中断する、邪魔する
oven|オーブン
pant|（pants で）ズボン
profitable|利益になる
refrigerator|冷蔵庫
reimburse|払い戻す、弁済する
showroom|展示室、ショールーム
vegetarian|菜食主義者（の）
administrator|管理者
broker|仲介業者、ブローカー
cancellation|取り消し、キャンセル
confidential|機密の、内密の
jet|ジェット機、噴射
realistic|現実的な
thoroughly|徹底的に、完全に
trash|ごみ
usage|使用（量）、使い方
windy|風の強い
automate|自動化する
ferry|フェリー、連絡船
finalize|最終決定する、仕上げる
incur|（費用・損害を）負う、被る
instruct|指示する、教える
loyal|忠実な、常連の
luncheon|昼食会
microphone|マイク
overview|概要、概観
projector|プロジェクター
shortage|不足
spacious|広々とした
accomplishment|業績、達成
# 401〜500
accustom|慣れさせる（be accustomed to で「～に慣れている」）
clinic|診療所
desktop|デスクトップ（の）、机の上
jog|ジョギングする
leisure|余暇、自由な時間
nap|昼寝（する）
reinforce|強化する、補強する
sender|送り主、差出人
vacuum|掃除機（をかける）、真空
wireless|無線の
yearly|年1回の、毎年の
appreciation|感謝、正しい理解
cargo|貨物、積み荷
cooperate|協力する
distract|気をそらす
dividend|配当金
exemption|免除
furnish|家具を備える、提供する
hourly|1時間ごとの、時給の
laundry|洗濯（物）、クリーニング店
mandatory|義務的な、必須の
mechanical|機械の、機械的な
pharmacy|薬局
promotional|販売促進の
quarterly|四半期ごとの（に）
residential|住宅の、居住用の
scholarship|奨学金
seeker|求める人（job seeker で求職者）
temporarily|一時的に
towel|タオル
unattended|放置された、付き添いのない
accessible|利用しやすい、行きやすい
afterward|その後で
apology|謝罪
assemble|組み立てる、集まる
automatic|自動の
boardroom|役員会議室
carpenter|大工
caterer|仕出し業者
classify|分類する
consultation|相談、協議
durable|丈夫な、長持ちする
glove|手袋
hardware|金物類、ハードウェア
malfunction|故障、不具合（を起こす）
outdated|時代遅れの、古い
patience|忍耐、我慢
postcard|はがき、絵はがき
prospective|見込みのある、将来の
revision|修正、改訂
strictly|厳しく、厳密に
tomato|トマト
tray|盆、トレー
vendor|販売業者、売り手
withdrawal|引き出し、撤退
anytime|いつでも
badge|名札、バッジ
brake|ブレーキ（をかける）
calculation|計算
coordinator|まとめ役、調整係
costly|費用のかかる、高価な
equip|備え付ける、装備する
excursion|小旅行、遠足
graphic|図、画像（の）、生々しい
inexperience|経験不足
lengthy|長ったらしい、長時間の
librarian|図書館員、司書
meantime|その間（in the meantime で）
merge|合併する、統合する
performer|演者、出演者
pharmacist|薬剤師
pizza|ピザ
resignation|辞職、辞表
reviewer|評論家、審査する人
terminate|終わらせる、解約する
translation|翻訳
unfamiliar|よく知らない、不慣れな
actress|女優
adjacent|隣接した
alternate|代わりの、交互に行う
congratulate|祝う
escort|付き添う、案内する、護衛
inexpensive|安価な、手ごろな
mask|マスク、覆う
purchaser|購入者
purse|ハンドバッグ、財布
realtor|不動産業者
rearrange|並べ替える、予定を組み直す
reopen|再開する
soap|石けん
spokesperson|広報担当者、代弁者
superior|より優れた、上司
airfare|航空運賃
bake|（パンなどを）焼く
businessperson|実業家、会社員
considerably|かなり、相当に
faulty|欠陥のある、誤った
hobby|趣味
informal|非公式の、形式ばらない
kilometer|キロメートル
# 501〜600
lawn|芝生
microscope|顕微鏡
mislead|誤解させる、だます
misplace|置き忘れる、置き場所を間違える
newsstand|新聞・雑誌の売店
overhead|頭上の（に）、諸経費
portfolio|作品集、資産の組み合わせ
rack|棚、ラック
remodel|改装する、作り直す
statistics|統計、統計学
tunnel|トンネル
unlimited|無制限の
vitamin|ビタミン
zoo|動物園
alert|警戒した、警告（する）
auditorium|講堂、観客席
celebrity|有名人
deduct|差し引く、控除する
disruption|混乱、中断
electrician|電気技師
enthusiastic|熱心な、熱狂的な
graduation|卒業
icy|凍った、氷のように冷たい
irregular|不規則な、ふぞろいの
login|ログイン
managerial|管理の、経営の
mineral|鉱物、ミネラル
motorcycle|オートバイ
necessity|必要（性）、必需品
planner|立案者、計画表
programmer|プログラマー
proofread|校正する
recruiter|採用担当者
remainder|残り
statue|像、彫像
steadily|着実に、絶えず
stockholder|株主
vacant|空いている、欠員の
accessory|付属品、装身具
assembly|組み立て、集会
basket|かご
certification|証明、認定
closure|閉鎖、閉店
dislike|嫌う、嫌悪
downstairs|階下に（の）
expiration|期限切れ、満了
headache|頭痛、悩みの種
jam|渋滞、詰まり、ジャム
nail|くぎ、爪
optimistic|楽観的な
pedestrian|歩行者
projection|予測、投影
sleeve|袖
suburb|郊外
takeover|買収、乗っ取り
unsure|確信がない
upstairs|階上に（の）
verbal|言葉の、口頭の
visa|ビザ、査証
wildlife|野生生物
workforce|労働力、全従業員
absent|欠席の、不在の
accumulate|蓄積する、たまる
appraisal|評価、査定
apprentice|見習い、実習生
businessman|実業家、会社員
ceiling|天井、上限
colorful|色彩豊かな
compensate|補償する、埋め合わせる
costume|衣装
editorial|社説、編集の
effectiveness|有効性、効果
facilitate|容易にする、促進する
firefighter|消防士
gasoline|ガソリン
inappropriate|不適切な
internet|インターネット
landlord|家主、大家
layout|配置、割り付け
lunchtime|昼食時間
payroll|給与支払い名簿、給与総額
pharmaceutical|製薬の、薬剤の
plausible|もっともらしい
premium|保険料、割増金、上質の
safely|安全に
simplify|簡単にする
specialty|専門、名物料理
tech|技術（の）
unexpected|予期しない
unspecified|特定されていない
adhere|守る、従う、くっつく
bankrupt|破産した
caution|注意、用心（させる）
clip|留める、切り抜く、クリップ
comply|従う、応じる
diner|食事客、簡易食堂
duplicate|複製（する）、写し
eager|熱望して、熱心な
economist|経済学者
embassy|大使館
# 601〜700
fasten|締める、留める
harmful|有害な
informative|有益な、情報に富む
institute|研究所、協会、制定する
kit|道具一式、キット
locally|地元で、局所的に
mentor|指導役、助言者
nominate|推薦する、指名する
opt|選ぶ
parade|行列、パレード
physician|医師、内科医
polish|磨く、つや出し
postage|郵便料金
recreational|娯楽の、気晴らしの
rehearse|下げいこをする、予行演習する
removal|除去、撤去、移転
satisfactory|満足のいく
seasonal|季節の、季節限定の
separately|別々に
turnover|離職率、売上高、回転率
unnecessary|不必要な
accordingly|それに応じて、したがって
apple|りんご
applicable|当てはまる、適用できる
auction|競売、オークション
balcony|バルコニー
basement|地下室
beforehand|前もって
culinary|料理の
documentary|記録映画、ドキュメンタリー
downturn|景気の下降、低迷
earthquake|地震
elegant|上品な、優雅な
excessive|過度の
generic|一般的な、ノーブランドの
jazz|ジャズ
lifetime|生涯、寿命
massage|マッサージ（する）
maximize|最大限にする
mild|穏やかな、軽い
ongoing|進行中の、継続している
periodically|定期的に
pie|パイ
plug|プラグ、栓、差し込む
recruitment|採用、募集
referee|審判員、身元保証人
referral|紹介、推薦
renown|名声
runner|走者
sock|靴下
spam|迷惑メール
surf|（ネットを）見て回る、波乗りをする
timetable|時刻表、予定表
vase|花びん
aboard|乗って、搭乗して
advancement|進歩、昇進
advertiser|広告主
alternatively|その代わりに、あるいは
amuse|楽しませる
attorney|弁護士
authorization|許可、認可
campus|構内、キャンパス
candy|キャンディー、甘い菓子
certify|証明する、認定する
checkout|会計、チェックアウト
chemistry|化学、相性
circulation|発行部数、循環、流通
concierge|コンシェルジュ、接客係
consent|同意（する）
consistently|一貫して、常に
cookie|クッキー
deck|甲板、デッキ
descriptive|説明的な、描写的な
detach|切り離す、取り外す
documentation|書類、文書化
entrepreneur|起業家
exceptional|並外れた、例外的な
familiarize|慣れ親しませる、習熟させる
hotline|直通電話、相談窓口
intonation|抑揚、イントネーション
invention|発明（品）
irritate|いらいらさせる、刺激する
locker|ロッカー
overlook|見落とす、見渡す
patent|特許（を取る）
payable|支払うべき、支払われる
preliminary|予備の、準備の
salesman|販売員
sauna|サウナ
smoothly|円滑に、なめらかに
sunshine|日光、日ざし
tow|けん引する
translator|翻訳者
tuition|授業料
unavailable|利用できない、手が空いていない
violation|違反
webpage|ウェブページ
acceptance|受諾、受け入れ
allocate|割り当てる、配分する
ambitious|野心的な、意欲的な
# 701〜800
appendix|付録
booth|ブース、仕切り席、売店
clarify|明らかにする、はっきりさせる
classmate|同級生
compile|まとめる、編集する
correction|訂正、修正
customize|注文に合わせて作る、カスタマイズする
dedication|献身、熱意
diagnose|診断する、原因を突き止める
discontinue|中止する、生産を打ち切る
dishwasher|食器洗い機
drought|干ばつ、日照り
economize|節約する
entrée|主菜、メインディッシュ
firework|花火
freight|貨物（輸送）、運送料
fry|油で揚げる、炒める
gallon|ガロン（液量の単位）
gardener|庭師、園芸家
ideally|理想的には
inclusive|すべて含んだ、包括的な
insufficient|不十分な
introductory|入門の、紹介の
junk|がらくた、不要品
ma'am|奥様、お客様（女性への丁寧な呼びかけ）
mileage|走行距離、燃費、マイル数
noisy|騒がしい
pan|平なべ、フライパン
parcel|小包
pasta|パスタ
periodical|定期刊行物、雑誌
pill|錠剤
portable|持ち運びできる、携帯用の
punctual|時間を守る
recreation|娯楽、気晴らし
relieve|和らげる、安心させる
reminder|思い出させるもの、催促状
rumor|うわさ
scarf|スカーフ、マフラー
seaside|海辺（の）
shorten|短くする
specially|特別に、わざわざ
spill|こぼす、こぼれる
spouse|配偶者
subtract|引く、減じる
tablet|タブレット端末、錠剤
ton|トン、大量
vend|販売する（vending machine で自動販売機）
yoga|ヨガ
accent|なまり、強調、アクセント
advisory|助言の、勧告
asleep|眠って
authentic|本物の、本場の
bakery|パン屋
carton|紙箱、段ボール箱
compartment|仕切られた区画、収納部
compatible|互換性のある、両立できる
consumption|消費（量）
conveniently|便利に、都合よく
cosmetic|化粧品（の）、表面的な
courtesy|礼儀、好意、無料の
creativity|創造性
disagreement|意見の相違
disappointment|失望、期待外れ
dissatisfy|不満を抱かせる
enjoyable|楽しい
faculty|教授陣、学部、能力
favorable|好意的な、有利な
foreman|現場監督、作業長
forum|公開討論会、意見交換の場
founder|創業者、設立者
fundraise|資金を集める
graphics|画像、図表
handy|便利な、手近な
hazardous|危険な、有害な
healthcare|医療、健康管理
humidity|湿度、湿気
influential|影響力のある
nationwide|全国的な（に）
pad|はぎ取り式の用紙、当て物
paraphrase|言い換える、言い換え
placement|配置、職業紹介
postal|郵便の
publicity|宣伝、広報、評判
renter|借り手、賃借人
repairperson|修理工
repeatedly|繰り返して
restroom|お手洗い
silently|静かに、黙って
spa|温泉施設、スパ
spreadsheet|表計算ソフト（の表）
stapler|ホチキス
streamline|合理化する、効率化する
substantially|大幅に、かなり
teller|銀行の窓口係
tidy|きちんとした、片づける
toll|通行料、損害
toner|トナー
urgently|緊急に
walkway|歩道、通路
# 801〜900
absorb|吸収する
administer|管理する、実施する、投与する
ample|十分な、広い
antique|骨董品（の）
bean|豆
browse|見て回る、閲覧する
bye|さようなら
careless|不注意な
collector|収集家、集金人
conform|従う、合致する
congestion|混雑、渋滞
contradiction|矛盾
contrary|反対の、逆の
diploma|卒業証書、修了証書
distributor|卸売業者、販売代理店
dive|飛び込む、潜る、急落する
energetic|精力的な、活発な
environmentally|環境的に
escalator|エスカレーター
exotic|異国風の、珍しい
fabric|布地、織物
generalization|一般化
guidance|指導、助言
gum|ガム、歯ぐき
hesitant|ためらっている
indicator|指標、表示器
individually|個別に、一人ずつ
junior|下位の、年少の、後輩
lifestyle|生活様式
likewise|同様に
morale|士気、やる気
orchestra|管弦楽団
organizational|組織の
outlook|見通し、展望、考え方
physics|物理学
pole|棒、柱、極
puzzle|パズル、難問、困らせる
reflexive|反射的な、再帰の
snowy|雪の、雪の多い
steak|ステーキ
sticker|シール、ステッカー
telecommunication|電気通信
timely|時宜を得た、適時の
uncomfortable|心地よくない、気まずい
amenity|設備、快適さを与えるもの
approximate|おおよその、概算する
await|待つ
barbecue|バーベキュー
beginner|初心者
biology|生物学
blanket|毛布
chairperson|議長、司会者
charitable|慈善の
checkup|健康診断、点検
cooler|保冷箱、冷却器
crane|クレーン、起重機
dealership|販売代理店、特約店
dependable|頼りになる、信頼できる
disconnect|接続を切る、切り離す
dispose|処分する（dispose of で）
disrupt|混乱させる、中断させる
dynamic|活動的な、動的な
enthusiastically|熱心に、熱狂的に
freelance|自由契約の、フリーの
grill|焼き網（で焼く）、グリル
habitual|習慣的な、いつもの
internationally|国際的に
invaluable|非常に貴重な
messenger|使いの者、配達人
paperback|ペーパーバック、文庫本
rebate|払い戻し、割り戻し
recur|再発する、繰り返される
reproduce|複製する、再現する
spray|吹きかける、スプレー
staple|ホチキスで留める、主要産物
strategic|戦略的な
stripe|しま、ストライプ
teen|十代の（若者）
tempt|誘惑する、気を引く
timer|タイマー
unload|荷物を降ろす
unusually|異常に、珍しく
vacate|明け渡す、立ち退く
whale|クジラ
wisely|賢明に
amateur|素人（の）、愛好家
ambassador|大使
anew|新たに、改めて
architectural|建築の
attain|達成する、到達する
balloon|風船、気球
blueprint|設計図、青写真
bug|虫、（プログラムの）不具合
cautious|用心深い、慎重な
circuit|回路、巡回
clap|拍手する
commerce|商業、通商
convey|伝える、運ぶ
cord|コード、ひも
counselor|相談員、カウンセラー
# 901〜1000
debit|引き落とし、借方（に記入する）
delicate|繊細な、壊れやすい
dependence|依存
distraction|気を散らすもの
downsize|人員を削減する、小型化する
elephant|象
enthusiasm|熱意、熱中
enthusiast|熱心な愛好家
evident|明らかな
flexibility|柔軟性、融通
flextime|フレックスタイム制
fortunately|幸いにも
freighter|貨物船、貨物輸送機
generator|発電機
hallway|廊下、玄関
hamburger|ハンバーガー
hazard|危険、危険要因
homeowner|住宅所有者
imperative|絶対に必要な、命令的な
inflate|膨らませる、つり上げる
insert|挿入する、差し込む
lecturer|講師、講演者
meaningful|意味のある、有意義な
memorize|暗記する
merchant|商人、小売店主
modification|修正、変更
occupant|居住者、占有者
overcharge|過剰請求する
oversee|監督する
petition|嘆願書、請願（する）
pillow|枕
popcorn|ポップコーン
pottery|陶器、陶芸
professionally|職業上、専門的に
publicize|公表する、宣伝する
ray|光線
redecorate|改装する、模様替えする
refinery|精製所、製油所
refresh|元気を回復させる、更新する
refundable|払い戻しできる
reimbursement|払い戻し、弁済
reliability|信頼性
reluctant|気が進まない
sewer|下水道
skate|スケートをする、スケート靴
skateboard|スケートボード
sleepy|眠い
tailor|仕立屋、合わせて作る
termination|終了、解約
theft|盗難、窃盗
thunderstorm|雷雨
transmission|送信、伝達、変速機
transmit|送信する、伝える
unused|未使用の
waive|放棄する、免除する
yen|円
activate|起動する、有効にする
additionally|加えて、さらに
affirmative|肯定的な
baker|パン職人
brainstorm|意見を出し合う
cage|おり、かご
cinema|映画館、映画
collaboration|協力、共同作業
condominium|分譲マンション
consecutive|連続した
cordless|コードレスの
deluxe|豪華な、高級な
desirable|望ましい
discrepancy|食い違い、不一致
dispatch|発送する、派遣する
drawback|欠点、不利な点
dull|退屈な、鈍い
economically|経済的に
evenly|均等に
excellence|優秀さ、卓越
exclusively|もっぱら、独占的に
farewell|別れ、送別（の）
fatigue|疲労
fiscal|会計の、財政の
fleet|保有車両、船団
flour|小麦粉
fog|霧
formally|正式に
gram|グラム
handbook|手引き書、便覧
headphone|ヘッドホン
heater|暖房器具、ヒーター
helmet|ヘルメット
hiker|ハイキングをする人
homeless|家のない
lighter|ライター、より軽い
loudly|大声で、騒々しく
loyalty|忠誠、愛顧
microwave|電子レンジ
misidentify|誤認する、取り違える
neat|きちんとした、こぎれいな
nomination|推薦、指名
officially|正式に、公式に
outfit|服装一式、装備（する）
# 1001〜1100
pastry|焼き菓子、パイ生地
personalize|個人向けにする、名前を入れる
poorly|下手に、不十分に
prestigious|名声のある、一流の
purser|（船・飛行機の）事務長、パーサー
reassure|安心させる
resume|再開する
reunion|再会、同窓会
revolutionize|革命を起こす、大変革する
seafood|魚介類、海産物
signify|意味する、示す
slot|時間枠、投入口
steer|操縦する、導く
sue|訴える、告訴する
superb|すばらしい、見事な
traditionally|伝統的に、従来は
tremendous|とてつもない、すばらしい
underway|進行中で
unpleasant|不快な
violin|バイオリン
ward|病棟、区
worthwhile|価値のある、やりがいのある
adapter|変換器、アダプター
advisable|望ましい、賢明な
archive|保管記録、保管する
artistic|芸術的な
assurance|保証、確信
athletic|運動の、運動が得意な
attire|服装
auditor|監査役、会計検査官
bankruptcy|破産、倒産
bulk|大量、大部分
butter|バター
centimeter|センチメートル
circulate|回覧する、循環する
comb|くし（でとかす）
comfortably|快適に、楽に
compliance|法令順守、従うこと
contraction|短縮（形）、収縮
cookbook|料理本
cushion|クッション、衝撃を和らげる
dose|（薬の）1回分、服用量
drum|太鼓、ドラム缶
embed|埋め込む
evacuate|避難する、避難させる
expedite|早める、促進する
extinguisher|消火器
familiarity|よく知っていること、親しさ
flaw|欠陥、傷
fluctuate|変動する
fluent|流暢な
honestly|正直に、本当に
housekeep|家事をする、客室を整える（housekeeping で客室清掃）
hurricane|ハリケーン
hygiene|衛生
integral|不可欠な、必須の
interactive|双方向の、対話型の
interfere|邪魔する、干渉する
kilogram|キログラム
layoff|一時解雇
lightweight|軽量の
merit|長所、価値、値する
necklace|ネックレス
needy|貧しい、困窮している
overpay|払い過ぎる
pamphlet|小冊子、パンフレット
partial|部分的な、不公平な
penalize|罰する、不利にする
pollute|汚染する
prescribe|処方する、規定する
probable|ありそうな、見込みのある
prominent|著名な、目立つ
rainfall|降雨（量）
relocation|移転、転勤
residence|住居、居住
retrieve|取り戻す、検索する
rider|乗り手、乗客
rubber|ゴム
rug|敷物、じゅうたん
salespeople|販売員たち
sharply|急激に、鋭く
similarity|類似（点）
someday|いつか
spectator|観客
stereo|ステレオ（装置）
storeroom|貯蔵室、物置
subsidize|補助金を出す
suspicious|疑わしい、不審な
tasty|おいしい
terrific|すばらしい
underground|地下の（に）
unpaid|未払いの、無給の
volleyball|バレーボール
wheelchair|車椅子
whoever|～する人は誰でも
wool|羊毛、ウール
wrinkle|しわ（が寄る）
accuracy|正確さ
anyhow|とにかく、いずれにせよ
appetizer|前菜
# 1101〜1200
arc|弧、アーチ形
audition|オーディション（を受ける）
backpack|リュックサック
ballroom|大宴会場、舞踏室
beneficial|有益な、ためになる
biography|伝記
bound|～行きの、～するはずの、縛られた
broom|ほうき
cheeseburger|チーズバーガー
chilly|肌寒い
circus|サーカス
compliment|ほめ言葉、称賛（する）
consignment|委託（販売）、積送品
continental|大陸の、ヨーロッパ風の
copyright|著作権
countryside|田舎、田園地帯
demolish|取り壊す
departmental|部門の、部署の
desperate|必死の、絶望的な
devastate|壊滅させる、打ちのめす
diagnostic|診断の
diagram|図、図表
diamond|ダイヤモンド
disable|無効にする、使えなくする
disgust|嫌悪（させる）
donut|ドーナツ
doorman|ドアマン、玄関係
electronically|電子的に
elevate|高める、持ち上げる
engagement|約束、婚約、関与
enrollment|登録（者数）、入学
euro|ユーロ
forbid|禁じる
fork|フォーク、分岐点
foster|育成する、促進する
getaway|短い休暇、逃走
gossip|うわさ話（をする）
hacker|ハッカー
hardworking|勤勉な、よく働く
impatient|我慢できない、待ちきれない
indirect|間接的な、遠回しの
interpreter|通訳者
intersection|交差点
irrelevant|無関係な
jeans|ジーンズ
journalism|報道（業）、ジャーナリズム
letterhead|社名入りの便せん、レターヘッド
lifeguard|水難救助員、監視員
modem|モデム
monument|記念碑、遺跡
mosquito|蚊
obligate|義務を負わせる
oblige|義務づける、恩恵を施す
occurrence|出来事、発生
operational|稼働できる、運営上の
outage|停電、供給停止
overcrowd|混雑させる、詰め込みすぎる
paralegal|弁護士補助員
partially|部分的に
pepper|こしょう、ピーマン
permanently|永久に、常に
plow|除雪する、耕す、すき
query|質問、問い合わせ（る）
railway|鉄道
raincoat|レインコート
reconsider|考え直す
redesign|再設計する、設計のやり直し
rehearsal|下げいこ、予行演習
relaxation|息抜き、緩和
repetition|繰り返し、反復
retreat|研修合宿、保養所、退却（する）
salon|美容院、サロン
satellite|衛星
scenery|風景、景色
serial|通し番号の、連続の
sew|縫う
sketch|下絵、略図（を描く）
smartphone|スマートフォン
soar|急上昇する、舞い上がる
stimulus|刺激、景気刺激策
stockbroker|株式仲買人
tablecloth|テーブルクロス
thirsty|のどが渇いた
thrill|わくわくさせる、興奮
tile|タイル、かわら
toiletry|洗面用品
trademark|商標
tropical|熱帯の
tuna|マグロ、ツナ
unemployed|失業した
validate|有効にする、正当性を確認する
vanilla|バニラ
willingness|意欲、進んですること
wristwatch|腕時計
abide|守る、従う（abide by で）
actively|積極的に
allergy|アレルギー
apprehensive|不安な、心配している
automotive|自動車の
bacteria|細菌
# 1201〜1250
broaden|広げる、広がる
bulb|電球、球根
by-law|内規、条例
cheer|歓声（を上げる）、元気づける
complication|面倒な問題、合併症
considerate|思いやりのある
daytime|昼間、日中
decoration|装飾、飾り
discard|捨てる、処分する
drastically|大幅に、徹底的に
erase|消す、消去する
explorer|探検家
factual|事実に基づく
fixture|備品、設備
footwear|履物
genre|ジャンル、種類
gymnasium|体育館
hereby|これにより、ここに
hesitation|ためらい
homemade|手作りの、自家製の
hospitality|もてなし、接客業
incoming|入ってくる、後任の
induction|就任、新人研修、誘導
inspiration|ひらめき、着想を与えるもの
intently|熱心に、一心に
mower|芝刈り機
nutrition|栄養
restatement|言い換え、再表明
sedan|セダン（型自動車）
sunscreen|日焼け止め
wellness|健康であること
workbook|練習帳、ワークブック
bookcase|本棚
cleanliness|清潔さ
contestant|出場者、競争者
ethics|倫理、道徳
healthful|健康によい
inefficient|非効率的な
liter|リットル
recession|景気後退、不況
timeline|予定表、年表
unreliable|当てにならない、信頼できない
acclaim|称賛（する）
chronic|慢性的な、長引く
deteriorate|悪化する、劣化する
resemble|似ている
unauthorized|許可のない、権限のない
violate|違反する、侵害する
unplug|プラグを抜く
videoconference|テレビ会議
`;
Object.assign(EXAMPLES, {"freq:mister":"Excuse me, mister, you dropped your ticket.",
"freq:vacation":"She is on vacation until next Monday.",
"freq:client":"We are meeting an important client this afternoon.",
"freq:e-book":"The novel is also available as an e-book.",
"freq:airport":"A driver will pick you up at the airport.",
"freq:memo":"The manager sent a memo about the new dress code.",
"freq:reservation":"I would like to make a reservation for two at seven.",
"freq:logical":"Hiring more staff is the logical solution.",
"freq:fax":"Please fax the signed form to our office.",
"freq:o'clock":"The meeting starts at ten o'clock sharp.",
"freq:sincerely":"We sincerely apologize for the delay.",
"freq:sometime":"Let's have lunch sometime next week.",
"freq:supervisor":"Ask your supervisor before taking a day off.",
"freq:refund":"You can get a full refund within thirty days.",
"freq:goods":"The goods were damaged during shipping.",
"freq:workshop":"All new employees must attend the safety workshop.",
"freq:downtown":"Our new branch is located downtown.",
"freq:deadline":"The deadline for applications is March 1.",
"freq:invoice":"Please pay the invoice by the end of the month.",
"freq:brochure":"The brochure lists all of our tour packages.",
"freq:noon":"The store closes at noon on Sundays.",
"freq:accountant":"Our accountant will review the expense report.",
"freq:clerk":"The clerk at the front desk gave me a map.",
"freq:lobby":"Please wait for me in the hotel lobby.",
"freq:publish":"The company will publish its annual report in May.",
"freq:résumé":"Send your résumé and a cover letter by e-mail.",
"freq:enclose":"I have enclosed a copy of the contract.",
"freq:applicant":"Each applicant will be interviewed twice.",
"freq:seminar":"The marketing seminar begins at nine.",
"freq:technician":"A technician will come to repair the printer.",
"freq:cloth":"Wipe the screen with a soft cloth.",
"freq:fare":"The bus fare went up last month.",
"freq:receipt":"Keep your receipt in case you need to return the item.",
"freq:traveler":"Business travelers often stay at this hotel.",
"freq:caller":"The caller asked to speak with the manager.",
"freq:subway":"It is faster to take the subway to the convention center.",
"freq:luggage":"You may leave your luggage at the front desk.",
"freq:shipment":"The shipment will arrive on Thursday.",
"freq:infer":"What can be inferred about the speaker?",
"freq:waiter":"The waiter brought us the menu right away.",
"freq:rental":"The rental fee includes insurance.",
"freq:warranty":"The laptop comes with a two-year warranty.",
"freq:cafeteria":"Lunch is served in the cafeteria from eleven.",
"freq:chef":"The chef prepared a special menu for the event.",
"freq:elevator":"The elevator is out of order today.",
"freq:reception":"Please sign in at the reception desk.",
"freq:correctly":"Make sure the address is spelled correctly.",
"freq:lease":"We signed a three-year lease on the office.",
"freq:bicycle":"Many employees commute by bicycle.",
"freq:notify":"Please notify us of any change in your address.",
"freq:preview":"Members can preview the exhibition a day early.",
"freq:attendant":"The flight attendant served drinks to the passengers.",
"freq:subscription":"Your subscription will expire next month.",
"freq:convenient":"What time is convenient for you?",
"freq:manual":"Read the manual before using the machine.",
"freq:clue":"The context gives a clue to the word's meaning.",
"freq:garage":"My car is at the garage for repairs.",
"freq:obtain":"You must obtain a permit before starting construction.",
"freq:oval":"Mark the oval next to the correct answer.",
"freq:inventory":"We check our inventory at the end of every month.",
"freq:outdoor":"The hotel has an outdoor swimming pool.",
"freq:suitcase":"He packed his suitcase the night before the trip.",
"freq:destination":"The train reached its destination on time.",
"freq:occupation":"Please write your name and occupation on the form.",
"freq:postpone":"The meeting was postponed until Friday.",
"freq:contradict":"The new data contradict the earlier report.",
"freq:umbrella":"Take an umbrella because it may rain later.",
"freq:inference":"This question asks you to make an inference.",
"freq:cellphone":"Please turn off your cellphone during the performance.",
"freq:compact":"This compact camera fits in your pocket.",
"freq:merchandise":"All merchandise is twenty percent off this week.",
"freq:receptionist":"The receptionist will direct you to the meeting room.",
"freq:dentist":"I have an appointment with the dentist at three.",
"freq:identification":"Please show a form of photo identification.",
"freq:coupon":"Use this coupon to get ten percent off.",
"freq:depart":"The flight departs from gate twelve.",
"freq:reschedule":"Can we reschedule our appointment for Tuesday?",
"freq:tactic":"The sales team tried a new marketing tactic.",
"freq:renovation":"The lobby is closed for renovation.",
"freq:upgrade":"We upgraded our software last week.",
"freq:precede":"A short speech will precede the dinner.",
"freq:replacement":"We will send you a replacement free of charge.",
"freq:dine":"Guests can dine on the terrace in summer.",
"freq:passport":"Do not forget to bring your passport.",
"freq:coworker":"My coworker helped me finish the report.",
"freq:upcoming":"Tickets for the upcoming concert are on sale.",
"freq:cabinet":"The files are kept in the cabinet by the window.",
"freq:appliance":"The store sells kitchen appliances.",
"freq:explanatory":"See the explanatory notes at the end of the chapter.",
"freq:instructor":"The instructor answered every question.",
"freq:keyboard":"The keyboard on this laptop is very quiet.",
"freq:media":"The event received a lot of media attention.",
"freq:supermarket":"A new supermarket opened near the station.",
"freq:valid":"Your ticket is valid for one month.",
"freq:admission":"Admission to the museum is free on Mondays.",
"freq:laptop":"Bring your laptop to the training session.",
"freq:underline":"Underline the key points in the text.",
"freq:electrical":"The fire was caused by an electrical problem.",
"freq:airplane":"The airplane landed ten minutes early.",
"freq:assignment":"Her next assignment is in the Tokyo office.",
"freq:exit":"Please use the rear exit in case of fire.",
"freq:attendee":"Each attendee will receive a name badge.",
"freq:cruise":"They took a cruise around the islands.",
"freq:birthday":"We bought a cake for the manager's birthday.",
"freq:café":"Let's meet at the café across the street.",
"freq:comprehension":"The test measures reading comprehension.",
"freq:mall":"The mall stays open until ten on weekends.",
"freq:medication":"Take this medication twice a day after meals.",
"freq:recycle":"Please recycle paper and plastic bottles.",
"freq:renew":"You need to renew your membership every year.",
"freq:tenant":"The tenants were told about the repair work.",
"freq:sandwich":"I usually have a sandwich for lunch.",
"freq:departure":"The departure time has been changed to six.",
"freq:mini":"The room has a mini refrigerator.",
"freq:fitness":"The hotel has a fitness center on the second floor.",
"freq:inconvenience":"We apologize for any inconvenience.",
"freq:banquet":"The awards banquet will be held at the Grand Hotel.",
"freq:closet":"Extra supplies are stored in the closet.",
"freq:unreal":"The view from the top floor was unreal.",
"freq:distractor":"Each question has one answer and three distractors.",
"freq:expire":"My driver's license expires next month.",
"freq:folder":"Put the documents in the blue folder.",
"freq:photocopy":"Please photocopy this page for everyone.",
"freq:renovate":"The hotel was renovated last year.",
"freq:sunny":"It will be sunny and warm tomorrow.",
"freq:calendar":"Mark the date on your calendar.",
"freq:donation":"The charity accepts donations of clothing.",
"freq:feedback":"We welcome feedback from our customers.",
"freq:shortly":"The train will arrive shortly.",
"freq:snack":"Snacks and drinks will be provided.",
"freq:warehouse":"The products are stored in a warehouse near the port.",
"freq:copier":"The copier on the third floor is broken.",
"freq:provider":"We changed our Internet service provider.",
"freq:beverage":"Beverages are not allowed in the library.",
"freq:hungry":"The children were hungry after the long walk.",
"freq:inspection":"The building passed its safety inspection.",
"freq:recipient":"The recipient must sign for the package.",
"freq:aisle":"Would you like a window seat or an aisle seat?",
"freq:inspect":"An engineer will inspect the equipment tomorrow.",
"freq:mechanic":"The mechanic fixed the engine in an hour.",
"freq:merger":"The merger of the two banks was announced today.",
"freq:soccer":"The company sponsors a local soccer team.",
"freq:sweater":"This sweater is available in three colors.",
"freq:ingredient":"We use only fresh ingredients.",
"freq:rewrite":"The editor asked me to rewrite the introduction.",
"freq:itinerary":"I will e-mail you the itinerary for the trip.",
"freq:workplace":"Safety in the workplace is our first concern.",
"freq:architect":"The architect designed the new city library.",
"freq:convenience":"Please reply at your earliest convenience.",
"freq:eligible":"Full-time employees are eligible for the bonus.",
"freq:indoor":"The gym has an indoor pool.",
"freq:baggage":"Collect your baggage on the first floor.",
"freq:dial":"Dial nine to reach an outside line.",
"freq:container":"Store the food in a sealed container.",
"freq:drawer":"The scissors are in the top drawer.",
"freq:lab":"Samples are tested in our lab.",
"freq:submission":"The deadline for submission is Friday.",
"freq:bulletin":"The notice was posted on the bulletin board.",
"freq:certificate":"You will receive a certificate after the course.",
"freq:gym":"He goes to the gym three times a week.",
"freq:highway":"Traffic on the highway is heavy this morning.",
"freq:respondent":"Most respondents were satisfied with the service.",
"freq:jewelry":"The shop sells handmade jewelry.",
"freq:overtime":"She worked overtime to finish the project.",
"freq:battery":"The battery lasts about ten hours.",
"freq:donate":"He donated books to the local library.",
"freq:outstanding":"She received an award for outstanding service.",
"freq:skim":"Skim the article to find the main idea.",
"freq:briefcase":"He left his briefcase in the taxi.",
"freq:dessert":"Would you like to see the dessert menu?",
"freq:impact":"The new law had a big impact on small businesses.",
"freq:innovative":"The company is known for its innovative products.",
"freq:inquire":"I am writing to inquire about your prices.",
"freq:overnight":"We offer overnight delivery for urgent orders.",
"freq:venue":"The venue for the conference has changed.",
"freq:commuter":"The station is crowded with commuters at eight.",
"freq:logo":"The company's logo is printed on every box.",
"freq:newsletter":"The monthly newsletter is sent to all members.",
"freq:advisor":"Talk to a financial advisor before investing.",
"freq:cartridge":"We need to order a new ink cartridge.",
"freq:cloudy":"It will be cloudy with a chance of rain.",
"freq:photographer":"A photographer was hired for the ceremony.",
"freq:shopper":"The store was full of holiday shoppers.",
"freq:tag":"The price is written on the tag.",
"freq:announcer":"The radio announcer read the weather report.",
"freq:aspect":"We discussed every aspect of the plan.",
"freq:audit":"The firm conducts an audit every year.",
"freq:contractor":"We hired a contractor to repair the roof.",
"freq:download":"You can download the form from our Web site.",
"freq:password":"Change your password every three months.",
"freq:prohibit":"Smoking is prohibited in this building.",
"freq:stadium":"The concert will be held at the city stadium.",
"freq:terminal":"International flights leave from Terminal 2.",
"freq:weekday":"The bank is open on weekdays from nine to three.",
"freq:bonus":"Employees receive a bonus in December.",
"freq:cart":"Put the items in your shopping cart.",
"freq:delicious":"The soup was absolutely delicious.",
"freq:ink":"The printer is out of black ink.",
"freq:supervise":"She supervises a team of ten engineers.",
"freq:waitress":"The waitress took our order quickly.",
"freq:cleaner":"The cleaners come every evening after six.",
"freq:developer":"The developer plans to build apartments on the site.",
"freq:headquarter":"The company is headquartered in Chicago.",
"freq:shuttle":"A free shuttle runs between the hotel and the airport.",
"freq:stationery":"Order pens and other stationery from this catalog.",
"freq:subscribe":"You can subscribe to our magazine online.",
"freq:alike":"The two products look alike but differ in price.",
"freq:flavor":"This ice cream comes in five flavors.",
"freq:picnic":"The company picnic will be held in the park.",
"freq:recipe":"This recipe takes only twenty minutes.",
"freq:refreshment":"Refreshments will be served after the lecture.",
"freq:administrative":"She works as an administrative assistant.",
"freq:authorize":"Only managers can authorize overtime pay.",
"freq:commonly":"This software is commonly used in schools.",
"freq:distribution":"The firm handles the distribution of our products.",
"freq:sofa":"A new sofa was delivered to the waiting room.",
"freq:accommodate":"The hall can accommodate five hundred people.",
"freq:affordable":"The store offers affordable furniture.",
"freq:annoy":"The noise from the street annoyed the guests.",
"freq:commute":"He commutes to work by train.",
"freq:coordinate":"She will coordinate the schedules of both teams.",
"freq:paperwork":"There is a lot of paperwork to complete.",
"freq:quit":"He quit his job to start his own business.",
"freq:authority":"Only the director has the authority to sign.",
"freq:flu":"Several workers are home with the flu.",
"freq:captain":"The captain announced a short delay.",
"freq:installation":"Installation of the new system takes two days.",
"freq:trainer":"A trainer will show you how to use the machines.",
"freq:availability":"Please check the availability of rooms.",
"freq:bargain":"This jacket was a real bargain.",
"freq:complimentary":"Guests receive a complimentary breakfast.",
"freq:hike":"We went for a hike in the mountains.",
"freq:midnight":"The store is open until midnight.",
"freq:productivity":"The new machines increased productivity.",
"freq:rainy":"The picnic was canceled because of rainy weather.",
"freq:relocate":"The company will relocate to a larger building.",
"freq:trainee":"Each trainee is paired with a senior employee.",
"freq:transaction":"All transactions are recorded in the system.",
"freq:unhappy":"Some customers were unhappy with the delay.",
"freq:verify":"Please verify your e-mail address.",
"freq:automobile":"The automobile industry is growing quickly.",
"freq:courier":"The documents were sent by courier.",
"freq:incomplete":"Your application form is incomplete.",
"freq:questionnaire":"Please fill out this short questionnaire.",
"freq:baseball":"They watched a baseball game on Saturday.",
"freq:dock":"The ship is waiting at the dock.",
"freq:lamp":"The lamp on my desk needs a new bulb.",
"freq:lately":"Sales have been slow lately.",
"freq:machinery":"The factory bought new machinery.",
"freq:presenter":"Each presenter has fifteen minutes to speak.",
"freq:seldom":"He is seldom late for work.",
"freq:signature":"Your signature is required on the last page.",
"freq:worldwide":"The brand is known worldwide.",
"freq:carrier":"The package was shipped by a different carrier.",
"freq:designate":"Smoking is allowed only in designated areas.",
"freq:exclusive":"This offer is exclusive to members.",
"freq:grocery":"She stopped at the grocery store on her way home.",
"freq:homework":"Do your homework before the interview.",
"freq:memorandum":"A memorandum was sent to all department heads.",
"freq:photocopier":"The photocopier is out of paper.",
"freq:suite":"Our office is in Suite 300.",
"freq:thorough":"The auditors made a thorough check of the records.",
"freq:bookstore":"The bookstore on the corner sells used books.",
"freq:cater":"A local restaurant will cater the party.",
"freq:dental":"The health plan covers dental care.",
"freq:duration":"Please remain seated for the duration of the flight.",
"freq:lounge":"Passengers can relax in the airport lounge.",
"freq:painter":"The painters will finish the walls tomorrow.",
"freq:patron":"Patrons are asked to return books on time.",
"freq:prescription":"You need a prescription for this medicine.",
"freq:productive":"We had a very productive meeting.",
"freq:salad":"The meal comes with soup or salad.",
"freq:stack":"He stacked the boxes against the wall.",
"freq:delegate":"Each country sent two delegates to the conference.",
"freq:salesperson":"A salesperson helped me choose a printer.",
"freq:calculator":"Use a calculator to check the total.",
"freq:completion":"The bridge is close to completion.",
"freq:defect":"The product was recalled because of a defect.",
"freq:garbage":"Garbage is collected on Tuesdays and Fridays.",
"freq:omit":"Please do not omit any information on the form.",
"freq:spite":"The game went ahead in spite of the rain.",
"freq:bathroom":"Each room has a private bathroom.",
"freq:cab":"We took a cab from the station.",
"freq:correspondence":"Keep copies of all correspondence with clients.",
"freq:ladder":"He climbed the ladder to change the light.",
"freq:photography":"Photography is not allowed inside the museum.",
"freq:sculpture":"A large sculpture stands in front of the building.",
"freq:anniversary":"The company is celebrating its tenth anniversary.",
"freq:buffet":"Breakfast is served as a buffet.",
"freq:defective":"We will replace any defective parts.",
"freq:ice cream":"They sell homemade ice cream in summer.",
"freq:leak":"There is a water leak in the kitchen.",
"freq:occupancy":"The hotel's occupancy rate is high in August.",
"freq:proficiency":"The job requires proficiency in English.",
"freq:renewal":"Send the renewal form before your contract ends.",
"freq:urgent":"I have an urgent message for Mr. Kim.",
"freq:annually":"The festival is held annually in June.",
"freq:basketball":"He plays basketball with his coworkers.",
"freq:delete":"Do not delete this file.",
"freq:illogical":"The conclusion of the report seems illogical.",
"freq:pet":"Pets are not allowed in the apartment.",
"freq:textbook":"The textbook is required for the course.",
"freq:accurately":"The figures must be entered accurately.",
"freq:cabin":"Passengers should return to the cabin for landing.",
"freq:conductor":"The conductor checked our tickets.",
"freq:inspector":"A safety inspector visited the plant.",
"freq:intern":"The intern helped prepare the presentation.",
"freq:semester":"The course runs for one semester.",
"freq:confirmation":"You will receive a confirmation by e-mail.",
"freq:congratulation":"Congratulations on your promotion!",
"freq:expertise":"We need someone with expertise in tax law.",
"freq:graph":"The graph shows sales for the past year.",
"freq:taker":"Test takers must arrive thirty minutes early.",
"freq:utility":"The rent does not include utilities.",
"freq:voucher":"This voucher is good for one free meal.",
"freq:banker":"The banker explained the terms of the loan.",
"freq:behalf":"I am writing on behalf of our president.",
"freq:minimize":"We must minimize the risk of accidents.",
"freq:optional":"The afternoon tour is optional.",
"freq:paycheck":"Taxes are taken out of each paycheck.",
"freq:polite":"The staff were polite and helpful.",
"freq:protective":"Workers must wear protective gloves.",
"freq:seller":"The seller agreed to lower the price.",
"freq:sidewalk":"Do not park your bicycle on the sidewalk.",
"freq:sightsee":"We went sightseeing in the old town.",
"freq:soup":"The soup of the day is tomato.",
"freq:transit":"The goods were damaged in transit.",
"freq:wallet":"I left my wallet at home.",
"freq:cashier":"Please pay the cashier at the front.",
"freq:casual":"Casual clothing is allowed on Fridays.",
"freq:drill":"A fire drill will be held this afternoon.",
"freq:fountain":"Let's meet by the fountain in the square.",
"freq:juice":"Would you like some orange juice?",
"freq:lane":"The left lane is closed for repairs.",
"freq:popularity":"The popularity of online shopping keeps growing.",
"freq:poster":"A poster for the event is on the wall.",
"freq:promptly":"The meeting began promptly at nine.",
"freq:retailer":"The retailer has stores in ten cities.",
"freq:vacancy":"The hotel has no vacancies this weekend.",
"freq:bench":"A man is sitting on a bench in the park.",
"freq:cumulative":"The cumulative sales reached one million units.",
"freq:directory":"Look up the number in the staff directory.",
"freq:disposal":"Follow the rules for the disposal of batteries.",
"freq:housekeeper":"The housekeeper cleans the rooms every morning.",
"freq:internship":"She did an internship at a law firm.",
"freq:knowledgeable":"The guide was very knowledgeable about the area.",
"freq:organizer":"Contact the organizer for more details.",
"freq:overdue":"The payment is two weeks overdue.",
"freq:prediction":"The prediction for next year is positive.",
"freq:subscriber":"The magazine has over ten thousand subscribers.",
"freq:booklet":"A booklet with instructions is in the box.",
"freq:conditioner":"The air conditioner in my room is not working.",
"freq:enroll":"You can enroll in the class online.",
"freq:frustrate":"The long wait frustrated many customers.",
"freq:garment":"Wash this garment in cold water.",
"freq:orientation":"New staff attend an orientation on the first day.",
"freq:outlet":"Plug the charger into the outlet.",
"freq:packet":"An information packet will be mailed to you.",
"freq:plumber":"We called a plumber to fix the sink.",
"freq:specification":"The part did not meet our specifications.",
"freq:auto":"He works at an auto repair shop.",
"freq:decorate":"The hall was decorated with flowers.",
"freq:deduction":"You can claim a tax deduction for donations.",
"freq:definite":"We need a definite answer by Friday.",
"freq:economical":"This car is very economical on fuel.",
"freq:efficiently":"The new system works more efficiently.",
"freq:flyer":"We handed out flyers at the station.",
"freq:franchise":"He owns a fast-food franchise.",
"freq:generous":"Thank you for your generous donation.",
"freq:interrupt":"Sorry to interrupt, but you have a phone call.",
"freq:oven":"Bake the bread in the oven for thirty minutes.",
"freq:pant":"He bought a new pair of pants for the interview.",
"freq:profitable":"The store became profitable in its second year.",
"freq:refrigerator":"Keep the milk in the refrigerator.",
"freq:reimburse":"The company will reimburse your travel costs.",
"freq:showroom":"The latest models are in our showroom.",
"freq:vegetarian":"The restaurant offers several vegetarian dishes.",
"freq:administrator":"Contact the system administrator for help.",
"freq:broker":"An insurance broker compared several plans for us.",
"freq:cancellation":"There is a fee for late cancellation.",
"freq:confidential":"This information is strictly confidential.",
"freq:jet":"The company owns a private jet.",
"freq:realistic":"We need to set a realistic goal.",
"freq:thoroughly":"Wash your hands thoroughly.",
"freq:trash":"Please take out the trash before you leave.",
"freq:usage":"Water usage rises in summer.",
"freq:windy":"It is cold and windy today.",
"freq:automate":"The factory plans to automate its packing line.",
"freq:ferry":"The ferry leaves every thirty minutes.",
"freq:finalize":"We will finalize the contract next week.",
"freq:incur":"You may incur extra charges for late payment.",
"freq:instruct":"The guard instructed us to wait outside.",
"freq:loyal":"We offer discounts to our loyal customers.",
"freq:luncheon":"The mayor will speak at the luncheon.",
"freq:microphone":"The speaker's microphone was not working.",
"freq:overview":"The first chapter gives an overview of the topic.",
"freq:projector":"The projector is set up in Room B.",
"freq:shortage":"There is a shortage of skilled workers.",
"freq:spacious":"The apartment has a spacious living room.",
"freq:accomplishment":"Winning the award was a great accomplishment.",
"freq:accustom":"She is accustomed to working late.",
"freq:clinic":"The clinic is open until six on weekdays.",
"freq:desktop":"Each desk has a desktop computer.",
"freq:jog":"He jogs in the park every morning.",
"freq:leisure":"Read the report at your leisure.",
"freq:nap":"She took a short nap on the plane.",
"freq:reinforce":"The training reinforced our safety rules.",
"freq:sender":"The package was returned to the sender.",
"freq:vacuum":"Please vacuum the carpet in the lobby.",
"freq:wireless":"The café offers free wireless Internet.",
"freq:yearly":"The yearly fee is fifty dollars.",
"freq:appreciation":"We gave her a gift to show our appreciation.",
"freq:cargo":"The ship carries cargo to Asia.",
"freq:cooperate":"The two firms agreed to cooperate on the project.",
"freq:distract":"The noise distracted the workers.",
"freq:dividend":"The company paid a dividend to its shareholders.",
"freq:exemption":"Students may apply for a fee exemption.",
"freq:furnish":"The apartment is fully furnished.",
"freq:hourly":"The hourly wage is fifteen dollars.",
"freq:laundry":"The hotel offers a laundry service.",
"freq:mandatory":"Attendance at the meeting is mandatory.",
"freq:mechanical":"The flight was delayed by a mechanical problem.",
"freq:pharmacy":"You can pick up the medicine at any pharmacy.",
"freq:promotional":"The promotional campaign starts next month.",
"freq:quarterly":"We publish a quarterly sales report.",
"freq:residential":"This is a quiet residential area.",
"freq:scholarship":"She won a scholarship to study abroad.",
"freq:seeker":"The fair attracted hundreds of job seekers.",
"freq:temporarily":"The road is temporarily closed.",
"freq:towel":"Fresh towels are provided daily.",
"freq:unattended":"Do not leave your bags unattended.",
"freq:accessible":"The building is accessible by wheelchair.",
"freq:afterward":"We had dinner and went to a movie afterward.",
"freq:apology":"Please accept our apology for the error.",
"freq:assemble":"The desk is easy to assemble.",
"freq:automatic":"The doors are automatic.",
"freq:boardroom":"The directors are meeting in the boardroom.",
"freq:carpenter":"A carpenter built the shelves.",
"freq:caterer":"We hired a caterer for the wedding.",
"freq:classify":"The files are classified by date.",
"freq:consultation":"The first consultation is free.",
"freq:durable":"These boots are light and durable.",
"freq:glove":"Wear gloves when handling chemicals.",
"freq:hardware":"He bought nails at the hardware store.",
"freq:malfunction":"The delay was caused by a computer malfunction.",
"freq:outdated":"Our software is outdated.",
"freq:patience":"Thank you for your patience.",
"freq:postcard":"She sent me a postcard from Paris.",
"freq:prospective":"We met with several prospective clients.",
"freq:revision":"The contract needs some revisions.",
"freq:strictly":"Parking here is strictly prohibited.",
"freq:tomato":"Add two chopped tomatoes to the pan.",
"freq:tray":"Put your cup on the tray.",
"freq:vendor":"We buy our supplies from a local vendor.",
"freq:withdrawal":"You can make a withdrawal at any ATM.",
"freq:anytime":"You can call me anytime.",
"freq:badge":"Visitors must wear a badge at all times.",
"freq:brake":"The mechanic checked the brakes.",
"freq:calculation":"There is an error in the calculation.",
"freq:coordinator":"The event coordinator will contact you.",
"freq:costly":"Repairing the machine would be costly.",
"freq:equip":"Every room is equipped with a projector.",
"freq:excursion":"The tour includes an excursion to the lake.",
"freq:graphic":"She works as a graphic designer.",
"freq:inexperience":"He made the error because of his inexperience.",
"freq:lengthy":"The approval process is lengthy.",
"freq:librarian":"The librarian helped me find the book.",
"freq:meantime":"In the meantime, please wait in the lobby.",
"freq:merge":"The two departments will merge in April.",
"freq:performer":"The performers were given a long round of applause.",
"freq:pharmacist":"Ask the pharmacist how to take the medicine.",
"freq:pizza":"We ordered pizza for the team.",
"freq:resignation":"She handed in her resignation yesterday.",
"freq:reviewer":"The reviewer praised the film.",
"freq:terminate":"Either side may terminate the contract.",
"freq:translation":"We need a translation of this document.",
"freq:unfamiliar":"I am unfamiliar with this software.",
"freq:actress":"The actress won an award for the role.",
"freq:adjacent":"The parking lot is adjacent to the building.",
"freq:alternate":"Please take an alternate route.",
"freq:congratulate":"I want to congratulate you on your success.",
"freq:escort":"A guard will escort you to the office.",
"freq:inexpensive":"We stayed at an inexpensive hotel.",
"freq:mask":"Workers wear a mask in the lab.",
"freq:purchaser":"The purchaser must pay the shipping cost.",
"freq:purse":"She keeps her keys in her purse.",
"freq:realtor":"The realtor showed us three houses.",
"freq:rearrange":"We rearranged the desks in the office.",
"freq:reopen":"The store will reopen on Monday.",
"freq:soap":"There is no soap in the restroom.",
"freq:spokesperson":"A spokesperson said the factory would close.",
"freq:superior":"This model is superior to the old one.",
"freq:airfare":"The airfare to London has dropped.",
"freq:bake":"She bakes bread every weekend.",
"freq:businessperson":"She is a successful businessperson.",
"freq:considerably":"Prices have risen considerably.",
"freq:faulty":"The fire was caused by faulty wiring.",
"freq:hobby":"Gardening is his favorite hobby.",
"freq:informal":"We had an informal meeting over lunch.",
"freq:kilometer":"The hotel is two kilometers from the station.",
"freq:lawn":"He is cutting the lawn in front of the house.",
"freq:microscope":"The samples were examined under a microscope.",
"freq:mislead":"The advertisement may mislead customers.",
"freq:misplace":"I misplaced my keys this morning.",
"freq:newsstand":"The magazine is sold at every newsstand.",
"freq:overhead":"Put your bag in the overhead bin.",
"freq:portfolio":"Bring a portfolio of your work to the interview.",
"freq:rack":"Hang your coat on the rack by the door.",
"freq:remodel":"We plan to remodel the kitchen.",
"freq:statistics":"The statistics show a rise in exports.",
"freq:tunnel":"The train passed through a long tunnel.",
"freq:unlimited":"The plan includes unlimited data.",
"freq:vitamin":"Oranges are rich in vitamin C.",
"freq:zoo":"The children visited the zoo on Saturday.",
"freq:alert":"Please alert the staff if you see smoke.",
"freq:auditorium":"The lecture will be held in the main auditorium.",
"freq:celebrity":"A celebrity appeared in the commercial.",
"freq:deduct":"The fee will be deducted from your account.",
"freq:disruption":"The storm caused a disruption in train service.",
"freq:electrician":"An electrician repaired the lights.",
"freq:enthusiastic":"The audience was very enthusiastic.",
"freq:graduation":"He joined the firm right after graduation.",
"freq:icy":"Drive carefully on icy roads.",
"freq:irregular":"He works irregular hours.",
"freq:login":"Enter your login name and password.",
"freq:managerial":"She has ten years of managerial experience.",
"freq:mineral":"A bottle of mineral water is on each table.",
"freq:motorcycle":"He rides a motorcycle to work.",
"freq:necessity":"A car is a necessity in this town.",
"freq:planner":"The city planner presented a new design.",
"freq:programmer":"The firm is looking for a programmer.",
"freq:proofread":"Please proofread the letter before sending it.",
"freq:recruiter":"A recruiter called me about the position.",
"freq:remainder":"The remainder of the order will ship next week.",
"freq:statue":"A statue of the founder stands in the lobby.",
"freq:steadily":"Sales have grown steadily this year.",
"freq:stockholder":"The stockholders approved the plan.",
"freq:vacant":"The seat next to me was vacant.",
"freq:accessory":"The store sells phone accessories.",
"freq:assembly":"The parts are sent to the assembly line.",
"freq:basket":"Put the fruit in the basket.",
"freq:certification":"The job requires a teaching certification.",
"freq:closure":"The road closure will last two days.",
"freq:dislike":"Many people dislike working on weekends.",
"freq:downstairs":"The meeting room is downstairs.",
"freq:expiration":"Check the expiration date on the package.",
"freq:headache":"She went home early with a headache.",
"freq:jam":"We were stuck in a traffic jam.",
"freq:nail":"He hung the picture on a nail.",
"freq:optimistic":"We are optimistic about next year's sales.",
"freq:pedestrian":"This street is for pedestrians only.",
"freq:projection":"The sales projection for May is good.",
"freq:sleeve":"He rolled up his sleeves and started working.",
"freq:suburb":"They live in a quiet suburb of Boston.",
"freq:takeover":"The takeover was completed in March.",
"freq:unsure":"I am unsure about the meeting time.",
"freq:upstairs":"The manager's office is upstairs.",
"freq:verbal":"We had a verbal agreement.",
"freq:visa":"You need a visa to enter the country.",
"freq:wildlife":"The park is home to a variety of wildlife.",
"freq:workforce":"The company plans to expand its workforce.",
"freq:absent":"Two people were absent from the meeting.",
"freq:accumulate":"Dust accumulates quickly on the shelves.",
"freq:appraisal":"Staff appraisals take place every June.",
"freq:apprentice":"He started as an apprentice in a bakery.",
"freq:businessman":"The businessman is talking on the phone.",
"freq:ceiling":"The room has a high ceiling.",
"freq:colorful":"The room was decorated with colorful posters.",
"freq:compensate":"We will compensate you for the damage.",
"freq:costume":"The actors are changing their costumes.",
"freq:editorial":"She wrote an editorial for the newspaper.",
"freq:effectiveness":"We tested the effectiveness of the new drug.",
"freq:facilitate":"The software facilitates communication.",
"freq:firefighter":"Firefighters arrived within five minutes.",
"freq:gasoline":"The price of gasoline has gone up.",
"freq:inappropriate":"That comment was inappropriate for a meeting.",
"freq:internet":"You can book tickets on the internet.",
"freq:landlord":"The landlord raised the rent.",
"freq:layout":"We changed the layout of the office.",
"freq:lunchtime":"The café is busy at lunchtime.",
"freq:payroll":"She works in the payroll department.",
"freq:pharmaceutical":"He works for a pharmaceutical company.",
"freq:plausible":"That sounds like a plausible explanation.",
"freq:premium":"The insurance premium is paid monthly.",
"freq:safely":"The plane landed safely.",
"freq:simplify":"The new form simplifies the process.",
"freq:specialty":"Seafood is the specialty of this restaurant.",
"freq:tech":"He works for a tech company.",
"freq:unexpected":"We had an unexpected visitor.",
"freq:unspecified":"The meeting was moved to an unspecified date.",
"freq:adhere":"All staff must adhere to the safety rules.",
"freq:bankrupt":"The firm went bankrupt last year.",
"freq:caution":"Use caution when opening the door.",
"freq:clip":"Clip the receipts to the form.",
"freq:comply":"All products must comply with the law.",
"freq:diner":"The diners enjoyed the live music.",
"freq:duplicate":"Keep a duplicate of the key.",
"freq:eager":"The staff are eager to learn.",
"freq:economist":"Economists expect prices to rise.",
"freq:embassy":"Apply for the visa at the embassy.",
"freq:fasten":"Please fasten your seat belt.",
"freq:harmful":"Smoking is harmful to your health.",
"freq:informative":"The lecture was very informative.",
"freq:institute":"She teaches at a language institute.",
"freq:kit":"A first-aid kit is kept in the office.",
"freq:locally":"All of our vegetables are grown locally.",
"freq:mentor":"A senior engineer acts as her mentor.",
"freq:nominate":"He was nominated for the award.",
"freq:opt":"Many employees opted to work from home.",
"freq:parade":"The street is closed for the parade.",
"freq:physician":"Consult your physician before taking this drug.",
"freq:polish":"He polished his shoes before the interview.",
"freq:postage":"The price includes postage.",
"freq:recreational":"The park has many recreational facilities.",
"freq:rehearse":"We rehearsed the presentation twice.",
"freq:removal":"Snow removal begins at five in the morning.",
"freq:satisfactory":"The results of the test were satisfactory.",
"freq:seasonal":"The store hires seasonal workers in winter.",
"freq:separately":"The cables are sold separately.",
"freq:turnover":"The company has a low staff turnover.",
"freq:unnecessary":"Avoid unnecessary expenses.",
"freq:accordingly":"The plan changed, and we adjusted accordingly.",
"freq:apple":"She brought an apple for a snack.",
"freq:applicable":"The discount is not applicable to sale items.",
"freq:auction":"The painting was sold at auction.",
"freq:balcony":"Every room has a balcony with an ocean view.",
"freq:basement":"The storage room is in the basement.",
"freq:beforehand":"Please let us know beforehand if you cannot come.",
"freq:culinary":"He studied at a culinary school in Paris.",
"freq:documentary":"We watched a documentary about the ocean.",
"freq:downturn":"Sales fell during the economic downturn.",
"freq:earthquake":"The building is designed to resist earthquakes.",
"freq:elegant":"The hotel has an elegant dining room.",
"freq:excessive":"Avoid excessive use of paper.",
"freq:generic":"Generic drugs cost less than brand names.",
"freq:jazz":"A jazz band will play at the party.",
"freq:lifetime":"The watch comes with a lifetime warranty.",
"freq:massage":"The spa offers a one-hour massage.",
"freq:maximize":"We want to maximize our profits.",
"freq:mild":"The weather is mild in spring.",
"freq:ongoing":"The discussion is still ongoing.",
"freq:periodically":"The equipment is checked periodically.",
"freq:pie":"She baked an apple pie.",
"freq:plug":"Plug the cable into the back of the computer.",
"freq:recruitment":"The recruitment of new staff begins in spring.",
"freq:referee":"The referee stopped the game.",
"freq:referral":"Most of our new clients come by referral.",
"freq:renown":"The chef has won international renown.",
"freq:runner":"Over a thousand runners joined the race.",
"freq:sock":"He bought a pair of wool socks.",
"freq:spam":"The message went to my spam folder.",
"freq:surf":"He surfs the Internet during his break.",
"freq:timetable":"Check the bus timetable online.",
"freq:vase":"She put the flowers in a vase.",
"freq:aboard":"Welcome aboard Flight 201 to Seattle.",
"freq:advancement":"The job offers chances for advancement.",
"freq:advertiser":"Advertisers pay more during popular shows.",
"freq:alternatively":"Alternatively, you can pay by credit card.",
"freq:amuse":"The speaker amused the audience with his stories.",
"freq:attorney":"Speak to an attorney before you sign.",
"freq:authorization":"You need written authorization to enter.",
"freq:campus":"The library is at the center of the campus.",
"freq:candy":"There is a bowl of candy at the front desk.",
"freq:certify":"The inspector certified that the bridge was safe.",
"freq:checkout":"Checkout time is eleven in the morning.",
"freq:chemistry":"She has a degree in chemistry.",
"freq:circulation":"The newspaper has a large circulation.",
"freq:concierge":"The concierge booked a table for us.",
"freq:consent":"We need your written consent.",
"freq:consistently":"She consistently meets her sales targets.",
"freq:cookie":"Coffee and cookies were served.",
"freq:deck":"Passengers were standing on the deck.",
"freq:descriptive":"Write a short descriptive title for the photo.",
"freq:detach":"Detach the form and mail it to us.",
"freq:documentation":"Please bring the necessary documentation.",
"freq:entrepreneur":"The young entrepreneur started three companies.",
"freq:exceptional":"The hotel offers exceptional service.",
"freq:familiarize":"Familiarize yourself with the safety rules.",
"freq:hotline":"Call our customer hotline for help.",
"freq:intonation":"Listen to the speaker's intonation.",
"freq:invention":"His invention changed the industry.",
"freq:irritate":"The smoke irritated my eyes.",
"freq:locker":"Leave your bag in a locker.",
"freq:overlook":"We overlooked an error in the report.",
"freq:patent":"The company holds a patent on the design.",
"freq:payable":"Make the check payable to Green Foods.",
"freq:preliminary":"The preliminary results look good.",
"freq:salesman":"The salesman showed us several cars.",
"freq:sauna":"The gym has a sauna and a pool.",
"freq:smoothly":"The event went smoothly.",
"freq:sunshine":"We enjoyed the warm sunshine.",
"freq:tow":"His car was towed from the no-parking zone.",
"freq:translator":"We hired a translator for the meeting.",
"freq:tuition":"Tuition has risen by five percent.",
"freq:unavailable":"Mr. Lee is unavailable at the moment.",
"freq:violation":"He was fined for a parking violation.",
"freq:webpage":"The form is on our webpage.",
"freq:acceptance":"I received a letter of acceptance.",
"freq:allocate":"We allocated more money to training.",
"freq:ambitious":"It is an ambitious plan.",
"freq:appendix":"See the appendix for a full list of prices.",
"freq:booth":"Visit our booth at the trade fair.",
"freq:clarify":"Could you clarify the last point?",
"freq:classmate":"He started a company with a former classmate.",
"freq:compile":"She compiled a list of local suppliers.",
"freq:correction":"Please make the corrections in red.",
"freq:customize":"You can customize the design of your card.",
"freq:dedication":"We thank you for your dedication to the company.",
"freq:diagnose":"The technician diagnosed the problem quickly.",
"freq:discontinue":"This model has been discontinued.",
"freq:dishwasher":"The kitchen has a new dishwasher.",
"freq:drought":"The drought damaged this year's crops.",
"freq:economize":"We must economize on electricity.",
"freq:entrée":"Each entrée is served with rice.",
"freq:firework":"The festival ends with fireworks.",
"freq:freight":"The goods will be sent by air freight.",
"freq:fry":"Fry the onions until they are soft.",
"freq:gallon":"The tank holds fifteen gallons of fuel.",
"freq:gardener":"The gardener waters the plants every morning.",
"freq:ideally":"Ideally, the work should be finished by June.",
"freq:inclusive":"The price is inclusive of tax.",
"freq:insufficient":"There was insufficient time to finish.",
"freq:introductory":"We offer an introductory price for new members.",
"freq:junk":"Most of my mail is junk.",
"freq:ma'am":"Can I help you, ma'am?",
"freq:mileage":"The car has low mileage.",
"freq:noisy":"The restaurant was too noisy for a meeting.",
"freq:pan":"Heat some oil in a pan.",
"freq:parcel":"A parcel arrived for you this morning.",
"freq:pasta":"The lunch special is pasta with salad.",
"freq:periodical":"The library keeps periodicals on the second floor.",
"freq:pill":"Take one pill after each meal.",
"freq:portable":"He bought a portable speaker.",
"freq:punctual":"Please be punctual for the interview.",
"freq:recreation":"The town has a new recreation center.",
"freq:relieve":"This medicine relieves headaches.",
"freq:reminder":"This is a reminder about tomorrow's meeting.",
"freq:rumor":"There is a rumor that the plant will close.",
"freq:scarf":"She bought a silk scarf as a gift.",
"freq:seaside":"They stayed at a seaside hotel.",
"freq:shorten":"We shortened the meeting to thirty minutes.",
"freq:specially":"This cake was specially made for you.",
"freq:spill":"He spilled coffee on his keyboard.",
"freq:spouse":"Employees may bring their spouses to the party.",
"freq:subtract":"Subtract the discount from the total.",
"freq:tablet":"She read the report on her tablet.",
"freq:ton":"The truck can carry five tons.",
"freq:vend":"Drinks are sold in the vending machine downstairs.",
"freq:yoga":"A yoga class is offered at lunchtime.",
"freq:accent":"She speaks English with a French accent.",
"freq:advisory":"He sits on the advisory board.",
"freq:asleep":"The baby is asleep in the next room.",
"freq:authentic":"The restaurant serves authentic Thai food.",
"freq:bakery":"The bakery opens at six every morning.",
"freq:carton":"We ordered ten cartons of paper.",
"freq:compartment":"Put your bag in the overhead compartment.",
"freq:compatible":"The printer is compatible with most computers.",
"freq:consumption":"Energy consumption fell last year.",
"freq:conveniently":"The hotel is conveniently located near the station.",
"freq:cosmetic":"The store sells cosmetics on the first floor.",
"freq:courtesy":"A courtesy bus takes guests to the airport.",
"freq:creativity":"The job requires creativity and patience.",
"freq:disagreement":"There was a disagreement about the budget.",
"freq:disappointment":"The low sales were a disappointment.",
"freq:dissatisfy":"Many customers were dissatisfied with the service.",
"freq:enjoyable":"We had an enjoyable evening.",
"freq:faculty":"She joined the faculty of the business school.",
"freq:favorable":"The film received favorable reviews.",
"freq:foreman":"The foreman checked the work site.",
"freq:forum":"The city held a forum on housing.",
"freq:founder":"The founder of the company retired last year.",
"freq:fundraise":"The club is fundraising for a new roof.",
"freq:graphics":"The graphics in the game are excellent.",
"freq:handy":"This small bag is handy for travel.",
"freq:hazardous":"Hazardous waste must be handled carefully.",
"freq:healthcare":"The company offers healthcare benefits.",
"freq:humidity":"The humidity is high in summer.",
"freq:influential":"She is an influential business leader.",
"freq:nationwide":"The chain has stores nationwide.",
"freq:pad":"He wrote the number on a pad of paper.",
"freq:paraphrase":"The answer is a paraphrase of the passage.",
"freq:placement":"The placement of the desks was changed.",
"freq:postal":"Postal rates will go up in April.",
"freq:publicity":"The event got a lot of publicity.",
"freq:renter":"Renters must pay a deposit.",
"freq:repairperson":"A repairperson is coming to fix the heater.",
"freq:repeatedly":"I called the office repeatedly.",
"freq:restroom":"The restrooms are at the end of the hall.",
"freq:silently":"The audience waited silently.",
"freq:spa":"The hotel has a spa and a gym.",
"freq:spreadsheet":"Enter the sales figures in the spreadsheet.",
"freq:stapler":"May I borrow your stapler?",
"freq:streamline":"We streamlined the ordering process.",
"freq:substantially":"Costs have fallen substantially.",
"freq:teller":"The teller counted the money twice.",
"freq:tidy":"Please keep your desk tidy.",
"freq:toll":"There is a toll for using this bridge.",
"freq:toner":"The copier needs more toner.",
"freq:urgently":"We urgently need more volunteers.",
"freq:walkway":"A covered walkway connects the two buildings.",
"freq:absorb":"This cloth absorbs water quickly.",
"freq:administer":"The test is administered twice a year.",
"freq:ample":"There is ample parking behind the store.",
"freq:antique":"She collects antique furniture.",
"freq:bean":"We use coffee beans from Brazil.",
"freq:browse":"Feel free to browse through our catalog.",
"freq:bye":"Bye for now, and see you on Monday.",
"freq:careless":"A careless mistake caused the delay.",
"freq:collector":"The painting was bought by a private collector.",
"freq:conform":"All toys must conform to safety standards.",
"freq:congestion":"Traffic congestion is worst at five.",
"freq:contradiction":"There is a contradiction between the two reports.",
"freq:contrary":"Contrary to the forecast, it did not rain.",
"freq:diploma":"He has a diploma in hotel management.",
"freq:distributor":"We are the sole distributor in Japan.",
"freq:dive":"Share prices dived after the news.",
"freq:energetic":"We need an energetic sales manager.",
"freq:environmentally":"We use environmentally friendly packaging.",
"freq:escalator":"Take the escalator to the second floor.",
"freq:exotic":"The market sells exotic fruits.",
"freq:fabric":"This fabric is soft and light.",
"freq:generalization":"Avoid making a broad generalization.",
"freq:guidance":"New staff need guidance from their managers.",
"freq:gum":"Chewing gum is not allowed in the lab.",
"freq:hesitant":"She was hesitant to accept the offer.",
"freq:indicator":"Prices are an indicator of demand.",
"freq:individually":"Each item is wrapped individually.",
"freq:junior":"He is a junior member of the team.",
"freq:lifestyle":"Regular exercise is part of a healthy lifestyle.",
"freq:likewise":"He left early, and she did likewise.",
"freq:morale":"The bonus improved staff morale.",
"freq:orchestra":"The city orchestra will perform tonight.",
"freq:organizational":"She has strong organizational skills.",
"freq:outlook":"The outlook for the economy is good.",
"freq:physics":"He teaches physics at a high school.",
"freq:pole":"The flag is at the top of the pole.",
"freq:puzzle":"The sudden drop in sales puzzled the manager.",
"freq:reflexive":"Choose the correct reflexive pronoun.",
"freq:snowy":"Flights were delayed on a snowy morning.",
"freq:steak":"He ordered a steak and a salad.",
"freq:sticker":"Put the price sticker on the box.",
"freq:telecommunication":"He works in the telecommunication industry.",
"freq:timely":"Thank you for your timely reply.",
"freq:uncomfortable":"The chairs in the waiting room are uncomfortable.",
"freq:amenity":"The hotel offers amenities such as a pool and a gym.",
"freq:approximate":"What is the approximate cost?",
"freq:await":"We await your reply.",
"freq:barbecue":"The staff barbecue is on Saturday.",
"freq:beginner":"This class is for beginners.",
"freq:biology":"She studied biology at university.",
"freq:blanket":"Extra blankets are in the closet.",
"freq:chairperson":"The chairperson opened the meeting.",
"freq:charitable":"He gives money to charitable groups.",
"freq:checkup":"I have a medical checkup tomorrow.",
"freq:cooler":"The drinks are in the cooler.",
"freq:crane":"A crane lifted the steel beams.",
"freq:dealership":"He bought the car at a local dealership.",
"freq:dependable":"She is a dependable worker.",
"freq:disconnect":"Disconnect the printer before cleaning it.",
"freq:dispose":"Dispose of used batteries properly.",
"freq:disrupt":"The strike disrupted bus service.",
"freq:dynamic":"We are looking for a dynamic leader.",
"freq:enthusiastically":"The crowd cheered enthusiastically.",
"freq:freelance":"She works as a freelance writer.",
"freq:grill":"Grill the fish for five minutes.",
"freq:habitual":"He took his habitual seat by the window.",
"freq:internationally":"The brand is known internationally.",
"freq:invaluable":"Your advice has been invaluable.",
"freq:messenger":"A messenger delivered the contract.",
"freq:paperback":"The book is now out in paperback.",
"freq:rebate":"Buyers receive a fifty-dollar rebate.",
"freq:recur":"The problem may recur if we ignore it.",
"freq:reproduce":"Do not reproduce this page without permission.",
"freq:spray":"Spray the plants with water.",
"freq:staple":"Staple the pages together.",
"freq:strategic":"We made a strategic decision to expand.",
"freq:stripe":"He wore a shirt with blue stripes.",
"freq:teen":"The magazine is aimed at teens.",
"freq:tempt":"The low price tempted me to buy two.",
"freq:timer":"Set the timer for ten minutes.",
"freq:unload":"Workers are unloading boxes from the truck.",
"freq:unusually":"The store was unusually quiet today.",
"freq:vacate":"Guests must vacate their rooms by eleven.",
"freq:whale":"We saw a whale from the boat.",
"freq:wisely":"Spend your budget wisely.",
"freq:amateur":"The contest is open to amateur photographers.",
"freq:ambassador":"The ambassador gave a speech at the dinner.",
"freq:anew":"We had to begin the project anew.",
"freq:architectural":"The city is famous for its architectural style.",
"freq:attain":"She attained her sales goal in June.",
"freq:balloon":"The room was filled with balloons.",
"freq:blueprint":"The engineer studied the blueprints.",
"freq:bug":"The update fixes several bugs.",
"freq:cautious":"Investors are cautious about the market.",
"freq:circuit":"An electrical circuit was damaged.",
"freq:clap":"The audience clapped at the end.",
"freq:commerce":"Online commerce is growing fast.",
"freq:convey":"Please convey my thanks to your team.",
"freq:cord":"The power cord is too short.",
"freq:counselor":"A career counselor can help you find a job.",
"freq:debit":"You can pay by debit card.",
"freq:delicate":"Handle the delicate glassware with care.",
"freq:dependence":"We need to reduce our dependence on oil.",
"freq:distraction":"Turn off your phone to avoid distractions.",
"freq:downsize":"The firm plans to downsize next year.",
"freq:elephant":"The zoo has a baby elephant.",
"freq:enthusiasm":"She showed great enthusiasm for the project.",
"freq:enthusiast":"The show attracts car enthusiasts.",
"freq:evident":"It was evident that he was tired.",
"freq:flexibility":"The job offers flexibility in working hours.",
"freq:flextime":"Many workers use flextime to avoid rush hour.",
"freq:fortunately":"Fortunately, no one was hurt.",
"freq:freighter":"The freighter is carrying grain.",
"freq:generator":"The hospital has a backup generator.",
"freq:hallway":"The restroom is down the hallway.",
"freq:hamburger":"He had a hamburger for lunch.",
"freq:hazard":"Wet floors are a safety hazard.",
"freq:homeowner":"Homeowners must pay a property tax.",
"freq:imperative":"It is imperative that we meet the deadline.",
"freq:inflate":"Inflate the tires before a long trip.",
"freq:insert":"Insert your card into the machine.",
"freq:lecturer":"The lecturer spoke for an hour.",
"freq:meaningful":"We had a meaningful discussion.",
"freq:memorize":"You do not need to memorize the whole speech.",
"freq:merchant":"Local merchants supported the festival.",
"freq:modification":"The plan needs a few modifications.",
"freq:occupant":"All occupants must leave the building during the drill.",
"freq:overcharge":"I was overcharged for my meal.",
"freq:oversee":"She oversees the production line.",
"freq:petition":"Residents signed a petition against the plan.",
"freq:pillow":"Could I have an extra pillow?",
"freq:popcorn":"We bought popcorn at the theater.",
"freq:pottery":"She takes a pottery class on Sundays.",
"freq:professionally":"The photos were taken professionally.",
"freq:publicize":"The event was widely publicized.",
"freq:ray":"The curtains block the sun's rays.",
"freq:redecorate":"We redecorated the lobby last month.",
"freq:refinery":"The oil refinery employs five hundred people.",
"freq:refresh":"Refresh the page to see the latest prices.",
"freq:refundable":"The deposit is fully refundable.",
"freq:reimbursement":"Submit your receipts for reimbursement.",
"freq:reliability":"The car is known for its reliability.",
"freq:reluctant":"He was reluctant to change the plan.",
"freq:sewer":"The city is repairing the sewer system.",
"freq:skate":"People were skating on the frozen lake.",
"freq:skateboard":"Skateboards are not allowed in the mall.",
"freq:sleepy":"I feel sleepy after lunch.",
"freq:tailor":"The course is tailored to your needs.",
"freq:termination":"Either side can ask for termination of the contract.",
"freq:theft":"Report any theft to the police.",
"freq:thunderstorm":"A thunderstorm delayed our flight.",
"freq:transmission":"The transmission of data takes a few seconds.",
"freq:transmit":"The signal is transmitted by satellite.",
"freq:unused":"Return any unused tickets.",
"freq:waive":"The bank waived the late fee.",
"freq:yen":"The price is five thousand yen.",
"freq:activate":"Call this number to activate your card.",
"freq:additionally":"Additionally, breakfast is included.",
"freq:affirmative":"He gave an affirmative answer.",
"freq:baker":"The baker starts work at four.",
"freq:brainstorm":"Let's brainstorm ideas for the campaign.",
"freq:cage":"The bird is kept in a cage.",
"freq:cinema":"A new cinema opened downtown.",
"freq:collaboration":"The book was written in collaboration with a chef.",
"freq:condominium":"They bought a condominium near the beach.",
"freq:consecutive":"Sales rose for three consecutive months.",
"freq:cordless":"He bought a cordless drill.",
"freq:deluxe":"We booked a deluxe room.",
"freq:desirable":"Experience in sales is desirable.",
"freq:discrepancy":"There is a discrepancy between the two totals.",
"freq:dispatch":"Your order will be dispatched today.",
"freq:drawback":"The only drawback is the high price.",
"freq:dull":"The lecture was long and dull.",
"freq:economically":"The region is growing economically.",
"freq:evenly":"Spread the paint evenly.",
"freq:excellence":"The award is given for excellence in design.",
"freq:exclusively":"This item is sold exclusively online.",
"freq:farewell":"We held a farewell party for Mr. Sato.",
"freq:fatigue":"Drivers should rest to avoid fatigue.",
"freq:fiscal":"The fiscal year ends in March.",
"freq:fleet":"The company has a fleet of fifty trucks.",
"freq:flour":"Mix the flour with two eggs.",
"freq:fog":"The airport was closed because of fog.",
"freq:formally":"The plan was formally approved.",
"freq:gram":"Add two hundred grams of sugar.",
"freq:handbook":"Read the employee handbook carefully.",
"freq:headphone":"Use headphones in the library.",
"freq:heater":"The heater in the office is broken.",
"freq:helmet":"Wear a helmet on the construction site.",
"freq:hiker":"The trail is popular with hikers.",
"freq:homeless":"The charity provides meals for homeless people.",
"freq:lighter":"This model is lighter than the old one.",
"freq:loudly":"Please do not talk loudly in the hall.",
"freq:loyalty":"Join our loyalty program to earn points.",
"freq:microwave":"Heat the soup in the microwave.",
"freq:misidentify":"The system misidentified the customer.",
"freq:neat":"Her desk is always neat.",
"freq:nomination":"The film received five nominations.",
"freq:officially":"The store officially opens on Friday.",
"freq:outfit":"She bought a new outfit for the party.",
"freq:pastry":"The café sells coffee and fresh pastries.",
"freq:personalize":"You can personalize the mug with your name.",
"freq:poorly":"The event was poorly organized.",
"freq:prestigious":"She won a prestigious award.",
"freq:purser":"The purser welcomed the passengers.",
"freq:reassure":"The manager reassured the staff about their jobs.",
"freq:resume":"The meeting will resume after lunch.",
"freq:reunion":"He went to his college reunion.",
"freq:revolutionize":"Smartphones revolutionized communication.",
"freq:seafood":"The restaurant is famous for its seafood.",
"freq:signify":"A red light signifies danger.",
"freq:slot":"The ten o'clock slot is still open.",
"freq:steer":"He steered the boat into the harbor.",
"freq:sue":"The customer sued the company for damages.",
"freq:superb":"The food and service were superb.",
"freq:traditionally":"The festival is traditionally held in May.",
"freq:tremendous":"The show was a tremendous success.",
"freq:underway":"Construction is already underway.",
"freq:unpleasant":"There is an unpleasant smell in the room.",
"freq:violin":"She plays the violin in an orchestra.",
"freq:ward":"He works in the children's ward.",
"freq:worthwhile":"The training was really worthwhile.",
"freq:adapter":"You need an adapter for this plug.",
"freq:advisable":"It is advisable to book early.",
"freq:archive":"Old records are kept in the archive.",
"freq:artistic":"She has real artistic talent.",
"freq:assurance":"He gave us his assurance that it would arrive.",
"freq:athletic":"The store sells athletic shoes.",
"freq:attire":"Business attire is required.",
"freq:auditor":"The auditor found no errors.",
"freq:bankruptcy":"The airline filed for bankruptcy.",
"freq:bulk":"We buy paper in bulk to save money.",
"freq:butter":"Spread butter on the bread.",
"freq:centimeter":"The screen is thirty centimeters wide.",
"freq:circulate":"Please circulate this memo to your team.",
"freq:comb":"He combed his hair before the photo.",
"freq:comfortably":"The van seats eight people comfortably.",
"freq:compliance":"The factory is in compliance with the law.",
"freq:contraction":"\"Don't\" is a contraction of \"do not.\"",
"freq:cookbook":"She wrote a cookbook of family recipes.",
"freq:cushion":"Put a cushion on the chair.",
"freq:dose":"Do not take more than the stated dose.",
"freq:drum":"He plays the drums in a band.",
"freq:embed":"A chip is embedded in the card.",
"freq:evacuate":"We had to evacuate the building.",
"freq:expedite":"We paid extra to expedite the delivery.",
"freq:extinguisher":"A fire extinguisher is by the door.",
"freq:familiarity":"Familiarity with spreadsheets is required.",
"freq:flaw":"There is a small flaw in the glass.",
"freq:fluctuate":"Prices fluctuate with the season.",
"freq:fluent":"She is fluent in three languages.",
"freq:honestly":"I honestly did not know about the change.",
"freq:housekeep":"Call housekeeping if you need more towels.",
"freq:hurricane":"The hurricane damaged many homes.",
"freq:hygiene":"Food hygiene is very important.",
"freq:integral":"Training is an integral part of the job.",
"freq:interactive":"The museum has interactive displays.",
"freq:interfere":"The noise interferes with my work.",
"freq:kilogram":"The box weighs ten kilograms.",
"freq:layoff":"The company announced layoffs at two plants.",
"freq:lightweight":"This lightweight jacket is good for travel.",
"freq:merit":"We will discuss the merits of each plan.",
"freq:necklace":"She wore a gold necklace.",
"freq:needy":"The group collects food for needy families.",
"freq:overpay":"We overpaid the supplier by mistake.",
"freq:pamphlet":"Take a pamphlet from the information desk.",
"freq:partial":"We received a partial refund.",
"freq:penalize":"Drivers are penalized for speeding.",
"freq:pollute":"Factories must not pollute the river.",
"freq:prescribe":"The doctor prescribed some medicine.",
"freq:probable":"Rain is probable this afternoon.",
"freq:prominent":"A prominent lawyer spoke at the event.",
"freq:rainfall":"Rainfall was heavy last month.",
"freq:relocation":"The firm pays relocation costs.",
"freq:residence":"Please write your place of residence.",
"freq:retrieve":"I could not retrieve the deleted file.",
"freq:rider":"Bus riders can pay with a card.",
"freq:rubber":"Wear rubber gloves when cleaning.",
"freq:rug":"There is a rug in front of the sofa.",
"freq:salespeople":"Our salespeople are trained to give advice.",
"freq:sharply":"Sales fell sharply in July.",
"freq:similarity":"There is a similarity between the two designs.",
"freq:someday":"I hope to visit Kyoto someday.",
"freq:spectator":"Thousands of spectators watched the game.",
"freq:stereo":"The car has a good stereo.",
"freq:storeroom":"Extra chairs are in the storeroom.",
"freq:subsidize":"The city subsidizes public transport.",
"freq:suspicious":"Report any suspicious packages.",
"freq:tasty":"The soup was simple but tasty.",
"freq:terrific":"You did a terrific job.",
"freq:underground":"The hotel has underground parking.",
"freq:unpaid":"He took two weeks of unpaid leave.",
"freq:volleyball":"We played volleyball on the beach.",
"freq:wheelchair":"The entrance has a ramp for wheelchairs.",
"freq:whoever":"Whoever arrives first should unlock the door.",
"freq:wool":"This coat is made of wool.",
"freq:wrinkle":"This shirt does not wrinkle easily.",
"freq:accuracy":"We checked the accuracy of the data.",
"freq:anyhow":"It was raining, but we went anyhow.",
"freq:appetizer":"We shared an appetizer before the main course.",
"freq:arc":"The ball flew in a high arc.",
"freq:audition":"She has an audition for a play tomorrow.",
"freq:backpack":"He carried a backpack on the hike.",
"freq:ballroom":"The dinner will be held in the hotel ballroom.",
"freq:beneficial":"Exercise is beneficial to your health.",
"freq:biography":"I am reading a biography of the founder.",
"freq:bound":"This train is bound for Osaka.",
"freq:broom":"He swept the floor with a broom.",
"freq:cheeseburger":"I will have a cheeseburger and fries.",
"freq:chilly":"Bring a jacket because it is chilly outside.",
"freq:circus":"The circus is coming to town next week.",
"freq:compliment":"She received many compliments on her speech.",
"freq:consignment":"The shop sells used clothes on consignment.",
"freq:continental":"A continental breakfast is included.",
"freq:copyright":"The photo is protected by copyright.",
"freq:countryside":"They moved to the countryside.",
"freq:demolish":"The old factory will be demolished.",
"freq:departmental":"We have a departmental meeting every Monday.",
"freq:desperate":"The firm is desperate for skilled workers.",
"freq:devastate":"The flood devastated the town.",
"freq:diagnostic":"The mechanic ran a diagnostic test.",
"freq:diagram":"The diagram shows how to connect the cables.",
"freq:diamond":"He gave her a diamond ring.",
"freq:disable":"You can disable this feature in the settings.",
"freq:disgust":"The dirty kitchen disgusted the inspector.",
"freq:donut":"He brought donuts for the morning meeting.",
"freq:doorman":"The doorman called a taxi for us.",
"freq:electronically":"Tickets are sent electronically.",
"freq:elevate":"The award elevated the company's image.",
"freq:engagement":"I have a prior engagement that evening.",
"freq:enrollment":"Enrollment for the course begins in April.",
"freq:euro":"The ticket costs twenty euros.",
"freq:forbid":"The rules forbid eating in the lab.",
"freq:fork":"The fork goes on the left of the plate.",
"freq:foster":"The program fosters teamwork.",
"freq:getaway":"We planned a weekend getaway.",
"freq:gossip":"Do not listen to office gossip.",
"freq:hacker":"A hacker broke into the system.",
"freq:hardworking":"She is a hardworking employee.",
"freq:impatient":"Customers grew impatient in the long line.",
"freq:indirect":"The flight is cheap but indirect.",
"freq:interpreter":"We need an interpreter for the meeting.",
"freq:intersection":"Turn left at the next intersection.",
"freq:irrelevant":"His comment was irrelevant to the topic.",
"freq:jeans":"Jeans are allowed on Fridays.",
"freq:journalism":"She studied journalism in college.",
"freq:letterhead":"Print the letter on company letterhead.",
"freq:lifeguard":"A lifeguard is on duty at the pool.",
"freq:modem":"Restart the modem if the connection fails.",
"freq:monument":"We visited a famous monument.",
"freq:mosquito":"Use this spray to keep mosquitoes away.",
"freq:obligate":"You are not obligated to buy anything.",
"freq:oblige":"The law obliges firms to keep records.",
"freq:occurrence":"Power cuts are a rare occurrence here.",
"freq:operational":"The new plant is now fully operational.",
"freq:outage":"The storm caused a power outage.",
"freq:overcrowd":"The trains are overcrowded in the morning.",
"freq:paralegal":"She works as a paralegal at a law firm.",
"freq:partially":"The road is partially blocked.",
"freq:pepper":"Please pass the salt and pepper.",
"freq:permanently":"The store has closed permanently.",
"freq:plow":"The roads were plowed after the storm.",
"freq:query":"Please send any queries by e-mail.",
"freq:railway":"The railway connects the two cities.",
"freq:raincoat":"Take a raincoat in case it rains.",
"freq:reconsider":"We asked him to reconsider his decision.",
"freq:redesign":"The company redesigned its Web site.",
"freq:rehearsal":"The rehearsal starts at four.",
"freq:relaxation":"The spa is a place for relaxation.",
"freq:repetition":"Avoid the repetition of the same word.",
"freq:retreat":"The staff went on a two-day retreat.",
"freq:salon":"She had her hair cut at a salon.",
"freq:satellite":"The game was shown by satellite.",
"freq:scenery":"We enjoyed the mountain scenery.",
"freq:serial":"Write down the serial number of the camera.",
"freq:sew":"She sewed a button on the shirt.",
"freq:sketch":"He drew a sketch of the garden.",
"freq:smartphone":"You can check in with your smartphone.",
"freq:soar":"Fuel prices soared last year.",
"freq:stimulus":"The tax cut was a stimulus to the economy.",
"freq:stockbroker":"He asked a stockbroker for advice.",
"freq:tablecloth":"A white tablecloth covers each table.",
"freq:thirsty":"I was thirsty after the long walk.",
"freq:thrill":"We are thrilled to announce our new store.",
"freq:tile":"The floor is covered with tiles.",
"freq:toiletry":"Toiletries are provided in each room.",
"freq:trademark":"The name is a registered trademark.",
"freq:tropical":"They grow tropical fruits.",
"freq:tuna":"I ordered a tuna sandwich.",
"freq:unemployed":"He has been unemployed for six months.",
"freq:validate":"Please validate your parking ticket at the desk.",
"freq:vanilla":"Would you like vanilla or chocolate?",
"freq:willingness":"We value his willingness to help.",
"freq:wristwatch":"He looked at his wristwatch.",
"freq:abide":"All members must abide by the rules.",
"freq:actively":"She is actively looking for a job.",
"freq:allergy":"Tell the waiter if you have a food allergy.",
"freq:apprehensive":"He was apprehensive about the interview.",
"freq:automotive":"She works in the automotive industry.",
"freq:bacteria":"Wash your hands to remove bacteria.",
"freq:broaden":"The course will broaden your skills.",
"freq:bulb":"The light bulb needs to be changed.",
"freq:by-law":"The club's by-laws were revised last year.",
"freq:cheer":"The crowd cheered when the team won.",
"freq:complication":"A new complication delayed the project.",
"freq:considerate":"Please be considerate of other guests.",
"freq:daytime":"The shop is open only in the daytime.",
"freq:decoration":"The decorations for the party are ready.",
"freq:discard":"Discard any food that has passed its date.",
"freq:drastically":"Costs were drastically reduced.",
"freq:erase":"Please erase the board after class.",
"freq:explorer":"The explorer wrote a book about his trip.",
"freq:factual":"The report contains several factual errors.",
"freq:fixture":"The light fixtures were replaced.",
"freq:footwear":"Wear proper footwear on the site.",
"freq:genre":"Jazz is my favorite genre of music.",
"freq:gymnasium":"The event was held in the school gymnasium.",
"freq:hereby":"I hereby confirm my attendance.",
"freq:hesitation":"She accepted the job without hesitation.",
"freq:homemade":"The café serves homemade soup.",
"freq:hospitality":"Thank you for your warm hospitality.",
"freq:incoming":"Incoming calls are answered by the receptionist.",
"freq:induction":"New staff attend a one-day induction.",
"freq:inspiration":"Her trip was the inspiration for the design.",
"freq:intently":"The audience listened intently.",
"freq:mower":"The lawn mower is in the garage.",
"freq:nutrition":"Good nutrition is important for children.",
"freq:restatement":"The answer is a restatement of the main idea.",
"freq:sedan":"He rented a four-door sedan.",
"freq:sunscreen":"Put on sunscreen before going out.",
"freq:wellness":"The company started a wellness program.",
"freq:workbook":"Complete page ten in your workbook.",
"freq:bookcase":"The bookcase is next to the window.",
"freq:cleanliness":"The hotel is known for its cleanliness.",
"freq:contestant":"Each contestant has two minutes to answer.",
"freq:ethics":"The firm has a strict code of ethics.",
"freq:healthful":"The cafeteria serves healthful meals.",
"freq:inefficient":"The old system was slow and inefficient.",
"freq:liter":"The bottle holds two liters of water.",
"freq:recession":"Many shops closed during the recession.",
"freq:timeline":"We set a timeline for the project.",
"freq:unreliable":"The bus service is unreliable.",
"freq:acclaim":"The film won wide acclaim.",
"freq:chronic":"The city has a chronic housing shortage.",
"freq:deteriorate":"The weather deteriorated in the afternoon.",
"freq:resemble":"The new logo resembles the old one.",
"freq:unauthorized":"Unauthorized persons may not enter.",
"freq:violate":"The company violated safety rules.",
"freq:unplug":"Unplug the machine before cleaning it.",
"freq:videoconference":"We held a videoconference with the London office."});
