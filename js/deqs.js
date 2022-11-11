
let scoreA = 0;
let scoreB = 0;
let scoreT = 0;
let QOL = 0;

function hide(){
  $("#title-b").hide();
  $("#table-b").hide();
  $("#next-btn").hide();
  $("#menu").hide();
  }

function hidemenu(){
  $("#show-btn").hide();
  $("#noshow-btn").hide();
  $("#start-btn").hide();
  $("#clear-btn").hide();
  $("#list").hide();
  };

function showmenu(){
  $("#show-btn").show();
  $("#noshow-btn").show();
  $("#start-btn").show();
  $("#clear-btn").show();
  };

hide()


    //質問文[配列]
    const qs = [
        "問１）目がゴロゴロする（異物感）",
        "問２）目が乾く",
        "問３）目が痛い",
        "問４）目が疲れる",
        "問５）まぶたが重たい",
        "問６）目が赤くなる",
        "問７）目を開けているのがつらい",
        "問８）目を使􀀀ていると物がかすんで見える",
        "問９）光をまぶしく感じる",
        "問１０）新聞、雑誌、本などを読んでいる時、目の症状が悪くなる",
        "問１１）テレビを見ている時、パソコン・ケータイを使っている時に目の症状が悪くなる ",
        "問１２）目の症状のため 集中力が低下する",
        "問１３）目の症状のため 仕事・家事・勉強に差し障りがある",
        "問１４）目の症状のため 外出を控えがち",
        "問１５）目の症状のため 気分が晴れない",
    ]; 
    let n = qs.length;

    //A欄選択肢  
    const ta = 
      [ "なかった", "たまにあった", "時々あった","よくあった","いつもあった" ];

    const scoreTA =[0,1,2,3,4];

    //B欄選択肢  
    const tb = 
      [ "あまり気にならなかった", "やや気になった", "気になった","非常に気になった"];

    const scoreTB =[1,2,3,4];

    //1.最初の問題文＆回答選択肢＆回答値を設定
    let i = 0;
    function qt(i){
    //A欄
      $("#quest").html(qs[i]);
      $("#ta1").html(ta[0]);
      $("#ta2").html(ta[1]);
      $("#ta3").html(ta[2]);
      $("#ta4").html(ta[3]);
      $("#ta5").html(ta[4]);

    // B欄
      $("#tb1").html(tb[0]);
      $("#tb2").html(tb[1]);
      $("#tb3").html(tb[2]);
      $("#tb4").html(tb[3]);
    }

    // 最初の問題
    qt(i)

    //2.ラジオボタンをクリックしたらイベント発生！(クリックイベント)

  


    $("[name=ta]").on("click",function(){
      
      let name = $("#name").val();
      let age = $("#age").val();
      let gender = $("#gender").val();
      let date = $("#date").val();
      console.log(name)
      console.log(age)
      console.log(gender)
      console.log(date)


      if (date === '') {
        alert('日付を選んでください');
      }else if($(this).val() == 0){
        $("#next-btn").show(100);
        hidemenu();
      }else {
        $("#title-b").show();
        $("#table-b").show();
        hidemenu();
      } 
    });

    $("[name=tb]").on("click",function(){
      scoreB =  scoreTB[$(this).val()-1]; 
      $("#next-btn").show(100); 
      hidemenu();
    });

    $("#next-btn").on("click",function(){
      hide();
      scoreT = scoreT + scoreB;
      QOL = scoreT/(i+1)*25
      // console.log(i);
      // console.log(scoreB);
      // console.log(scoreT);
      // console.log(QOL);
      // console.log(n);
      scoreB = 0;
      if(i < (n-1)){
      i++
      qt(i)

    }else{
      $("#next-btn").hide();
      showmenu();
      let date = $("#date").val();
      localStorage.setItem(date,QOL);
      window.location.reload();  
    }
    });

    $("#show-btn").on("click",function(){
      $("#menu").show();
      for (let i = 0; i < localStorage.length; i++) {
            const date = localStorage.key(i);
            const value = localStorage.getItem(date);
            const html = `
        <tr>
            <th>${date}</th>
            <td>${value}</td>
        </tr>
    
        `
            // 画面上に埋め込み
            $("#list").append(html)
        }}
        );

    $("#noshow-btn").on("click",function(){
      $("#menu").hide();
      $("#list").empty();
        });

    $("#start-btn").on("click",function(){
      let date = $("#date").val();
      if (date === '') {
      alert('日付を選んでください');
      }
      });

    $("#clear-btn").on("click", function () {
      localStorage.clear();
      $("#list").empty();
      });