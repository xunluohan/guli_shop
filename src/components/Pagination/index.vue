<template>
  <div class="pagination">
    <!-- 一直都在,但是当当前页为第一页时,要禁用 -->
    <button
      @click="$emit('changePage', currentPageNo - 1)"
      :disabled="currentPageNo === 1"
    >
      上一页
    </button>
    <!-- 不一定显示,当起始页为第一页时,不能显示,否则会出现两个第一页 -->
    <button @click="$emit('changePage', 1)" v-if="startEnd.start !== 1">
      1
    </button>
    <!-- 不一定显示,起始页最小为3时,才需要显示... -->
    <button v-if="startEnd.start > 2">···</button>

    <!-- 
      遍历展示连续页,
      v-for: 可以直接遍历数字,遍历出来的值为,从1到要遍历的数字
        但是起始页之前的按钮并不需要,
        所以还要进行 v-if 判断, 如果遍历出来的值,大于等于起始页,才能被显示
     -->
    <button
      @click="$emit('changePage', page)"
      :class="{ active: page === currentPageNo }"
      v-for="page in startEnd.end"
      :key="page"
      v-if="page >= startEnd.start"
    >
      {{ page }}
    </button>

    <!-- 不一定显示,当结束页小于最大页数-1时,才能出现 -->
    <button v-if="startEnd.end < totalPageNo - 1">···</button>
    <!-- 不一定显示,当结束页为最后一页时,不能显示,否则会出现两个最后一页 -->
    <button
      @click="$emit('changePage', totalPageNo)"
      v-if="startEnd.end !== totalPageNo"
    >
      {{ totalPageNo }}
    </button>
    <!-- 一直都在,但是当当前页为最后一页时,要禁用 -->
    <button
      @click="$emit('changePage', currentPageNo + 1)"
      :disabled="totalPageNo === currentPageNo"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPageNo: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 1,
    },
    continueNo: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    // 计算总页数
    totalPageNo: {
      get() {
        return Math.ceil(this.total / this.pageSize);
      },
    },
    // 计算起始页/结束页
    startEnd() {
      // 初始化起始页
      let start = 0;
      // 初始化结束页
      let end = 0;
      // 获取 总页数 当前页 连续页数
      let { totalPageNo, currentPageNo, continueNo } = this;
      // 判断连续页数是否大于总页数
      if (continueNo >= totalPageNo) {
        start = 1;
        end = totalPageNo;
      } else {
        // 连续页数小于总页数
        // 起始页 = 当前页 - 向下取整(连续页数/2)
        start = currentPageNo - Math.floor(continueNo / 2);
        // 结束页 = 当前页 + 向下取整(连续页数/2)
        end = currentPageNo + Math.floor(continueNo / 2);

        // 如果起始页在最左侧,修正起始页和结束页
        if (start <= 1) {
          start = 1; // 起始页为1
          end = continueNo; // 结束页为连续页数
        }

        // 如果起始页在最右侧,修正起始页和结束页
        if (end >= totalPageNo) {
          end = totalPageNo;
          start = end - continueNo + 1;
        }
      }
      // 返回计算后的值
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>