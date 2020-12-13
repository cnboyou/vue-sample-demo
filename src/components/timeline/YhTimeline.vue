<template>
  <div id="yh-timeline">
    <div class="timeline-container" id="timeline-1">
      <div class="timeline-header">
        <h2 class="timeline-header__title">{{headerTitle}}</h2>
        <h3 class="timeline-header__subtitle">{{headerSubtitle}}</h3>
      </div>
      <div class="timeline">
        <div class="timeline-item" :data-text="item.title" v-for="(item, index) in dataList" :key="index">
          <div class="timeline__content">
            <img class="timeline__img" :src="item.url"/>
            <h2 class="timeline__content-title">{{item.time}}</h2>
            <p class="timeline__content-desc">{{item.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import jQuery from 'jquery'

  export default {
    name: "YhTimeline",
    data() {
      return {
        /*headerTitle: 'TIMELINE DESIGN',
        headerSubtitle: 'NEW AND CREATIVE',
        dataList: [
          {
            id: 1,
            title: 'NEW TIMELINE DESIGN',
            url: require("../../assets/image/timg.jpg"),
            time: 1920,
            desc: 'On April 23, 1920, the GrandNational Assembly was inaugurated. Mustafa Kemal Pasha was elected to its\n' +
                '              Presidency.\n' +
                '              Fighting on many fronts, he led his forces to victory against rebels and invadingarmies. Following the\n' +
                '              Turkish triumph at the two major battles at Inonu in Western Turkey,the Grand National Assembly conferred\n' +
                '              on Mustafa Kemal Pasha the title ofCommander-in-Chief with the rank of Marshal.\n' +
                '           '
          },
          {
            id: 2,
            title: 'NEW TIMELINE DESIGN',
            url: require("../../assets/image/bg/bg2.jpg"),
            time: 1920,
            desc: 'On April 23, 1920, the GrandNational Assembly was inaugurated. Mustafa Kemal Pasha was elected to its\n' +
                '              Presidency.\n' +
                '              Fighting on many fronts, he led his forces to victory against rebels and invadingarmies. Following the\n' +
                '              Turkish triumph at the two major battles at Inonu in Western Turkey,the Grand National Assembly conferred\n' +
                '              on Mustafa Kemal Pasha the title ofCommander-in-Chief with the rank of Marshal.\n' +
                '           '
          },
          {
            id: 3,
            title: 'NEW TIMELINE DESIGN',
            url: require("../../assets/image/bg/bg1.jpg"),
            time: 1920,
            desc: 'On April 23, 1920, the GrandNational Assembly was inaugurated. Mustafa Kemal Pasha was elected to its\n' +
                '              Presidency.\n' +
                '              Fighting on many fronts, he led his forces to victory against rebels and invadingarmies. Following the\n' +
                '              Turkish triumph at the two major battles at Inonu in Western Turkey,the Grand National Assembly conferred\n' +
                '              on Mustafa Kemal Pasha the title ofCommander-in-Chief with the rank of Marshal.\n' +
                '           '
          },
          {
            id: 4,
            title: 'NEW TIMELINE DESIGN',
            url: require("../../assets/image/timg.jpg"),
            time: 1920,
            desc: 'On April 23, 1920, the GrandNational Assembly was inaugurated. Mustafa Kemal Pasha was elected to its\n' +
                '              Presidency.\n' +
                '              Fighting on many fronts, he led his forces to victory against rebels and invadingarmies. Following the\n' +
                '              Turkish triumph at the two major battles at Inonu in Western Turkey,the Grand National Assembly conferred\n' +
                '              on Mustafa Kemal Pasha the title ofCommander-in-Chief with the rank of Marshal.\n' +
                '           '
          },
        ],*/
        headerTitle: '品牌发展史',
        headerSubtitle: 'BRAND DEVELOP',
        dataList: [
          {
            id: 2,
            title: '品牌创立',
            url: require("../../assets/image/bg/bg2.jpg"),
            time: 2018,
            desc: 'redis是Nosql数据库中使用较为广泛的非关系型内存数据库，redis内部是一个key-value存储系统。它支持存储的value类型相对更多，包括string(字符串)、list(链表)、set(集合)、zset(有序集合)和hash（哈希类型，类似于Java中的map）。Redis基于内存运行并支持持久化的NoSQL数据库，是当前最热门的NoSql数据库之一，也被人们称为数据结构存储服务务器。'
          },
          {
            id: 3,
            title: '品牌发展',
            url: require("../../assets/image/bg/bg1.jpg"),
            time: 2019,
            desc: 'redis是Nosql数据库中使用较为广泛的非关系型内存数据库，redis内部是一个key-value存储系统。它支持存储的value类型相对更多，包括string(字符串)、list(链表)、set(集合)、zset(有序集合)和hash（哈希类型，类似于Java中的map）。Redis基于内存运行并支持持久化的NoSQL数据库，是当前最热门的NoSql数据库之一，也被人们称为数据结构存储服务务器。'
          },
          {
            id: 4,
            title: '品牌展望',
            url: require("../../assets/image/timg.jpg"),
            time: 2020,
            desc: 'redis是Nosql数据库中使用较为广泛的非关系型内存数据库，redis内部是一个key-value存储系统。它支持存储的value类型相对更多，包括string(字符串)、list(链表)、set(集合)、zset(有序集合)和hash（哈希类型，类似于Java中的map）。Redis基于内存运行并支持持久化的NoSQL数据库，是当前最热门的NoSql数据库之一，也被人们称为数据结构存储服务务器。'
          },
        ],
      }
    },
    mounted() {
      (function(jQuery) {
        jQuery.fn.timeline = function() {
          let selectors = {
            id: jQuery(this),
            item: jQuery(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img"
          };
          selectors.item.eq(0).addClass(selectors.activeClass);
          selectors.id.css(
              "background-image",
              "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
          );
          let itemLength = selectors.item.length;
          jQuery(window).scroll(function() {
            let max, min;
            let pos = jQuery(this).scrollTop();
            selectors.item.each(function(i) {
              min = jQuery(this).offset().top;
              max = jQuery(this).height() + jQuery(this).offset().top;
              let that = jQuery(this);
              if (i == itemLength - 2 && pos > min + jQuery(this).height() / 2) {
                selectors.item.removeClass(selectors.activeClass);
                selectors.id.css(
                    "background-image",
                    "url(" + selectors.item.last().find(selectors.img).attr("src") + ")"
                );
                selectors.item.last().addClass(selectors.activeClass);
              } else if (pos <= max - 40 && pos >= min) {
                selectors.id.css(
                    "background-image",
                    "url(" + jQuery(this).find(selectors.img).attr("src") + ")"
                );
                selectors.item.removeClass(selectors.activeClass);
                jQuery(this).addClass(selectors.activeClass);
              }
            });
          });
        };
      })(jQuery);
      jQuery("#timeline-1").timeline();
    }
  }
</script>

<style scoped>

  #yh-timeline {
    width: 100%;
    height: 100%;
  }

  *{
    margin: 0;
    padding: 0;
  }
  .timeline {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 700px;
    position: relative;
  }
  .timeline__content-title {
    font-weight: normal;
    font-size: 66px;
    margin: -10px 0 0 0;
    transition: 0.4s;
    padding: 0 10px;
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
    color: #fff;
  }
  .timeline__content-desc {
    margin: 0;
    font-size: 15px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, .7);
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: normal;
    line-height: 25px;
  }
  .timeline:before {
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
    content: "";
    background: rgba(255, 255, 255, .07);
  }
  @media only screen and (max-width: 767px) {
    .timeline:before {
      left: 40px;
    }
  }
  .timeline-item {
    padding: 40px 0;
    opacity: 0.3;
    filter: blur(2px);
    transition: 0.5s;
    box-sizing: border-box;
    width: calc(50% - 40px);
    display: flex;
    position: relative;
    transform: translateY(-80px);
  }
  .timeline-item:before {
    content: attr(data-text);
    letter-spacing: 3px;
    width: 100%;
    position: absolute;
    color: rgba(255, 255, 255, .5);
    font-size: 13px;
    font-family: 'Pathway Gothic One', sans-serif;
    border-left: 2px solid rgba(255, 255, 255, .5);
    top: 70%;
    margin-top: -5px;
    padding-left: 15px;
    opacity: 0;
    right: calc(-100% - 56px);
  }
  .timeline-item:nth-child(even) {
    align-self: flex-end;
  }
  .timeline-item:nth-child(even):before {
    right: auto;
    text-align: right;
    left: calc(-100% - 56px);
    padding-left: 0;
    border-left: none;
    border-right: 2px solid rgba(255, 255, 255, .5);
    padding-right: 15px;
  }
  .timeline-item--active {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
  }
  .timeline-item--active:before {
    top: 50%;
    transition: 0.3s all 0.2s;
    opacity: 1;
  }
  .timeline-item--active .timeline__content-title {
    margin: -50px 0 20px 0;
  }
  @media only screen and (max-width: 767px) {
    .timeline-item {
      align-self: baseline !important;
      width: 100%;
      padding: 0 30px 150px 80px;
    }
    .timeline-item:before {
      left: 10px !important;
      padding: 0 !important;
      top: 50px;
      text-align: center !important;
      width: 60px;
      border: none !important;
    }
    .timeline-item:last-child {
      padding-bottom: 40px;
    }
  }
  .timeline__img {
    max-width: 100%;
    box-shadow: 0 10px 15px rgba(0, 0, 0, .4);
  }
  .timeline-container {
    width: 100%;
    position: relative;
    padding: 80px 0;
    transition: 0.3s ease 0s;
    background-attachment: fixed;
    background-size: cover;
  }
  .timeline-container:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    content: "";
  }
  .timeline-header {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
    position: relative;
  }
  .timeline-header__title {
    color: #fff;
    font-size: 58px;
    font-family: 'Oswald', sans-serif;
    font-weight: normal;
    margin: 0;
  }
  .timeline-header__subtitle {
    color: rgba(255, 255, 255, .5);
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 16px;
    letter-spacing: 5px;
    margin: 10px 0 0 0;
    font-weight: normal;
  }
  .demo-footer {
    padding: 60px 0;
    text-align: center;
  }
  .demo-footer a {
    color: #999;
    display: inline-block;
    font-family: Cardo;
  }

</style>