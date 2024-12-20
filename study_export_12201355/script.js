// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "学生と心理援助職間におけるメンタライジング能力の差の検討についてのアンケート",
          "content": "\u003Cbr\u003E\nこの度は本調査にアクセスしていただきありがとうございます。\u003Cbr\u003E\nこの調査は「学生と心理援助職間におけるメンタライジング能力の差」について調査することを目的としています。\u003Cbr\u003E\nそれぞれの指示に従い回答してください。また\u003Cb\u003E調査全体の所要時間はおよそ５〜７分\u003C\u002Fb\u003Eです。\u003Cbr\u003E\n回答に望ましい，望ましくないなどはありませんので率直な回答をお願いします。\u003Cbr\u003E\n今回回収したデータは，本調査研究のみで使用することを約束いたします。\u003Cbr\u003E\nデータは厳重に管理したうえで統計的に処理します。また分析終了後すみやかに削除します。\u003Cbr\u003E\nそのため，個人が特定されたり第三者に情報が洩れたりすることはありません。\u003Cbr\u003E\n回答を始めた後でも，回答をやめたいと思った場合には，理由に関わらずいつでも中断してもらって構いません。中断した場合に不利益が生じることは一切ありません。\u003Cbr\u003E\nただし本研究は匿名で行うため，アンケート送信後の取り消しは対応致しかねますので予めご了承ください。\u003Cbr\u003E\n\u003Cbr\u003E\nまた，本調査は質問項目の都合上，分量が多いためお手持ちのパソコンやタブレットなどアンケート表示画面が大きい媒体での回答を推奨しています。\u003Cbr\u003E\n\u003Cbr\u003E\n大阪教育大学大学院　教育学研究科　高度教育支援開発専攻　心理・教育支援コース　１年生\u003Cbr\u003E\n岡野 稔\u003Cbr\u003E\n\u003Cbr\u003E\n調査に関して質問がある方は，以下のメールアドレスまでご連絡ください。\u003Cbr\u003E\nj249603@ex.osaka-kyoiku.ac.jp\n\u003Cbr\u003E\u003Cbr\u003E\n指導教員：教育心理科学部門 准教授　山口正寛\u003Cbr\u003E\n連絡先：yamaguchi-m74@cc.osaka-kyoiku.ac.jp"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "radio",
          "label": "本研究の参加についての同意",
          "options": [
            {
              "label": "同意する",
              "coding": "1"
            },
            {
              "label": "同意しない",
              "coding": "2"
            }
          ],
          "name": "consent",
          "help": "参加に同意いただける方は，以下の「同意する」にチェックを入れ画面下部の「次へ」を押してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "フェースシート",
      "width": "l"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "あなた自身についてお伺いします。"
        },
        {
          "required": true,
          "type": "radio",
          "name": "character",
          "label": "あなたの職業を教えてください。",
          "options": [
            {
              "label": "大学生・大学院生",
              "coding": "1"
            },
            {
              "label": "社会人",
              "coding": "2"
            }
          ]
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": false,
          "type": "radio",
          "label": "あなたの性別を教えてください。",
          "options": [
            {
              "label": "男性",
              "coding": "1"
            },
            {
              "label": "女性",
              "coding": "2"
            },
            {
              "label": "わからない",
              "coding": "3"
            },
            {
              "label": "回答したくない",
              "coding": "4"
            }
          ],
          "name": "sex"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "属性"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": false,
          "type": "radio",
          "label": "あなたは何年生ですか。",
          "options": [
            {
              "label": "大学1年生",
              "coding": "1"
            },
            {
              "label": "大学2年生",
              "coding": "2"
            },
            {
              "label": "大学3年生",
              "coding": "3"
            },
            {
              "label": "大学4年生",
              "coding": "4"
            },
            {
              "label": "修士1年生",
              "coding": "5"
            },
            {
              "label": "修士2年生",
              "coding": "6"
            },
            {
              "label": "その他",
              "coding": "7"
            }
          ],
          "name": "grade"
        },
        {
          "required": false,
          "type": "input",
          "label": "「その他」を選んだ方は以下に記述してください。",
          "name": "grade_text"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": false,
          "type": "radio",
          "label": "大学及び大学院で心理に関する実習へ行きましたか。",
          "options": [
            {
              "label": "はい",
              "coding": "1"
            },
            {
              "label": "いいえ",
              "coding": "2"
            },
            {
              "label": "わからない",
              "coding": "3"
            }
          ],
          "name": "jissyuu"
        },
        {
          "required": false,
          "type": "checkbox",
          "label": "実習へ行った方はどの分野に行きましたか。（複数選択可）",
          "options": [
            {
              "label": "教育",
              "coding": "1"
            },
            {
              "label": "福祉",
              "coding": "2"
            },
            {
              "label": "医療",
              "coding": "3"
            },
            {
              "label": "司法",
              "coding": "4"
            },
            {
              "label": "産業",
              "coding": "5"
            }
          ],
          "name": "category"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": false,
          "type": "radio",
          "label": "対人援助に関するアルバイトやボランティアの経験はありますか。",
          "options": [
            {
              "label": "はい",
              "coding": "1"
            },
            {
              "label": "いいえ",
              "coding": "2"
            }
          ],
          "name": "volunteer",
          "help": "例）児童養護施設，放課後等デイサービス，スクールサポーター"
        },
        {
          "required": false,
          "type": "input",
          "label": "差し支えなければ，具体的な活動を以下に記述してください。",
          "name": "volun_text",
          "help": "例）放課後等デイサービスで小・中学生を対象に学習指導を行なったり，一緒に遊んでいる。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "大学生用",
      "tardy": true,
      "skip": "${this.state.character == 2}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": false,
          "type": "checkbox",
          "label": "現在お持ちの資格を選択してください。（複数選択可）",
          "options": [
            {
              "label": "公認心理師",
              "coding": "1"
            },
            {
              "label": "精神保健福祉士",
              "coding": "2"
            },
            {
              "label": "社会福祉士",
              "coding": "3"
            },
            {
              "label": "臨床心理士",
              "coding": "4"
            },
            {
              "label": "介護福祉士",
              "coding": "5"
            },
            {
              "label": "介護支援専門員",
              "coding": "6"
            },
            {
              "label": "訪問介護員",
              "coding": "7"
            },
            {
              "label": "理学療法士",
              "coding": "8"
            },
            {
              "label": "作業療法士",
              "coding": "9"
            },
            {
              "label": "言語聴覚士",
              "coding": "10"
            },
            {
              "label": "保育士",
              "coding": "11"
            },
            {
              "label": "認定心理士",
              "coding": "12"
            },
            {
              "label": "学校心理士",
              "coding": "13"
            },
            {
              "label": "医師",
              "coding": "14"
            },
            {
              "label": "保健師",
              "coding": "15"
            },
            {
              "label": "看護師",
              "coding": "16"
            }
          ],
          "name": "qualification"
        },
        {
          "required": false,
          "type": "input",
          "label": "上記の他に資格をお持ちの方は，以下に記述してください。",
          "name": "quali_other"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": false,
          "type": "input",
          "label": "現在の職場における，主な支援対象者を記述してください。",
          "name": "support_target"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": false,
          "type": "input",
          "label": "差し支えなければ，職務内容を記述してください。",
          "name": "job_detail"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": false,
          "type": "input",
          "label": "支援職としての勤続年数を記述してください。",
          "attributes": {
            "type": "number"
          },
          "name": "job_year",
          "help": "（例）2010年から2020年までは前職（支援職），2021年から2024年は今の職業（支援職）に就いている場合は「13」とお答えください。\n支援職では無い期間は勤続年数として含めないようお願いいたします。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "社会人用",
      "tardy": true,
      "skip": "${this.state.character == 1}"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "shuffle": true,
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "",
              "title": ""
            },
            {
              "required": false,
              "type": "likert",
              "items": [
                {
                  "label": "自分の行動の理由を理解することは重要であると思う",
                  "coding": "1"
                },
                {
                  "label": "相手の性格の特徴について結論をだすときは，その相手の言動を注意深く観察する",
                  "coding": "2"
                },
                {
                  "label": "相手の感情を把握することができる",
                  "coding": "3"
                },
                {
                  "label": "しばしば他人のことや他人の行動について考える",
                  "coding": "4"
                },
                {
                  "label": "たいていは何が相手を不安にさせているのかに気づくことができる",
                  "coding": "5"
                },
                {
                  "label": "相手の感情に共感をすることができる",
                  "coding": "6"
                },
                {
                  "label": "誰かが自分をいらつかせるとき，なぜ自分がそのように反応したのかを理解しようとする",
                  "coding": "7"
                },
                {
                  "label": "気が動転すると，自分が悲しいのか，恐れているのか，怒っているのかがわからなくなる",
                  "coding": "8"
                },
                {
                  "label": "他人の行動を詳細に理解することに無駄な時間をさくのは好きではない",
                  "coding": "9"
                },
                {
                  "label": "相手の信念や感情を知れば，相手の行動をうまく予測することができる",
                  "coding": "10"
                },
                {
                  "label": "自分のしたことの理由を，自分にさえも説明できないことがよくある",
                  "coding": "11"
                },
                {
                  "label": "ときどき，相手が自分に何か一言を話す前に，その相手の感じていることがわかる",
                  "coding": "12"
                },
                {
                  "label": "身近な人との人間関係において起こるものごとを理解することは重要であると思う",
                  "coding": "13"
                },
                {
                  "label": "自分についての好ましくない側面を知りたくない",
                  "coding": "14"
                },
                {
                  "label": "他人の行動を理解するには，相手の考えや希望，感情を知る必要がある",
                  "coding": "15"
                },
                {
                  "label": "よく身近な人と感情について話をする",
                  "coding": "16"
                },
                {
                  "label": "心理学的なテーマに関する本や新聞記事を読むのが好きだ",
                  "coding": "17"
                },
                {
                  "label": "悲しみや，傷つき，恐れを感じている自分を認めるのが難しい",
                  "coding": "18"
                },
                {
                  "label": "自分の問題について考えるのが好きではない",
                  "coding": "19"
                },
                {
                  "label": "身近な人の重要な特徴について正確かつ詳細に言い表すことができる",
                  "coding": "20"
                },
                {
                  "label": "自分の本当の感情に気がつくと，しばしば困惑する",
                  "coding": "21"
                },
                {
                  "label": "自分の感情を表すのにふさわしい言葉を見つけるのが難しいと感じる",
                  "coding": "22"
                },
                {
                  "label": "私が周りの人を理解し，適切な助言を与えている，と周りの人は言う",
                  "coding": "23"
                },
                {
                  "label": "なぜ人々がそのようにふるまうのか，以前からずっと興味を持っている",
                  "coding": "24"
                },
                {
                  "label": "自分が感じていることを表現することはたやすい",
                  "coding": "25"
                },
                {
                  "label": "周りの人が感情や不安に思うことについて話している間，私はしばしば別のことを考えている",
                  "coding": "26"
                },
                {
                  "label": "私たちはその場その時の状況に応じて生きており，他人の意向や希望について考えるのは無意味だ",
                  "coding": "27"
                },
                {
                  "label": "子供たちにとって感情や願いを表現する方法を学ぶことはとても重要なことである",
                  "coding": "28"
                }
              ],
              "width": 5,
              "anchors": [
                "\u003Cspan class=\"tategaki\"\u003E全く当てはまらない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003Eあまり当てはまらない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003Eどちらともいえない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003Eやや当てはまる\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003Eよく当てはまる\u003C\u002Fspan\u003E"
              ],
              "label": "各質問項目をよく読み，それぞれの文について最も当てはまる番号にチェックを入れてください。質問項目は全部で28項目です。",
              "name": "MentS-J"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ→",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "MentS-J",
          "width": "l"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": ""
            },
            {
              "required": false,
              "type": "likert",
              "items": [
                {
                  "label": "常に人の立場に立って，相手を理解するようにしている",
                  "coding": "1"
                },
                {
                  "label": "自分と違う考え方の人と話しているとき，その人がどうしてそのように考えているのかをわかろうとする",
                  "coding": "2"
                },
                {
                  "label": "相手を批判するときは，相手の立場を考えることができない",
                  "coding": "3"
                },
                {
                  "label": "人と対立しても，相手の立場に立つ努力をする",
                  "coding": "4"
                },
                {
                  "label": "人の話を聞くときは，その人が何を言いたいのかを考えながら話を聞く",
                  "coding": "5"
                }
              ],
              "width": 5,
              "anchors": [
                "\u003Cspan class=\"tategaki\"\u003E全く当てはまらない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003Eあまり当てはまらない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003Eどちらともいえない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003Eやや当てはまる\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003Eよく当てはまる\u003C\u002Fspan\u003E"
              ],
              "label": "各質問項目をよく読み，それぞれの文について最も当てはまる番号にチェックを入れてください。質問項目は全部で５項目です。",
              "name": "MES"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "MES",
          "width": "l"
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "以上でアンケートは終了です。",
          "content": "以上でアンケートは終了です。ありがとうございました。\n今回収集したデータは適切な管理・分析のもと，研究に活用させていただきます。"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": false,
          "type": "input",
          "label": "アンケートや研究について，ご質問・ご不明な点がございましたら以下の空欄にご記入ください。",
          "name": "free"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "謝辞"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "画面下部の送信するボタンを押していただいた後，画面を閉じていただいて構いません。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "送信する→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "ZM30ELEq4mqx",
    filename: filename,
    data: data,
  }),
});
}
      },
      "title": "Page",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()