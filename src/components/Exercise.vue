<script setup lang="ts">
import { ref, computed } from 'vue';
import { multipleChoice } from "../consts/multipleChoice.ts";
import { shortAnswer } from "../consts/shortAnswer.ts";
import Light from "../icons/Light.vue";
import Dark from "../icons/Dark.vue";
import Thinking from "../icons/Thinking.vue";

const isShortAnswerTab = ref(false); // 是否切换到简答题 Tab
const isDarkMode = ref(false); // 是否为暗色模式

// 切换暗色模式
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

// 简答题状态管理
const shortAnswerIndex = ref(0); // 当前简答题索引
const currentShortAnswer = computed(() => shortAnswer[shortAnswerIndex.value]); // 当前简答题

// 上一简答题
const prevShortAnswer = () => {
  isFlipped.value = true; // 切换卡片翻转状态
  if (shortAnswerIndex.value > 0) {
    shortAnswerIndex.value--;
  }
};

// 下一简答题
const nextShortAnswer = () => {
  isFlipped.value = true; // 切换卡片翻转状态
  if (shortAnswerIndex.value < shortAnswer.length - 1) {
    shortAnswerIndex.value++;
  }
};

const incorrectQuestions = ref([{
  question: '',
  userAnswer: '',
  correctAnswer: '',
}]); // 新增：存储错题详细信息

// 解析问题选项
const parseOptions = (questionText: string) => {
  const lines = questionText.split('\n');
  const options: { letter: string; text: string }[] = [];
  const optionRegex = /^([A-Z]) : (.+)$/;

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(optionRegex);
    if (match) {
      options.push({
        letter: match[1],
        text: match[2]
      });
    }
  }

  return options;
};

// 增强问题数据
const enhancedQuestions = computed(() => {
  return multipleChoice.map(q => ({
    ...q,
    options: parseOptions(q.question),
    isMultiple: q.question.includes('多选')
  }));
});

// 状态管理
const currentIndex = ref(0);
const userAnswers = ref<string[]>(Array(multipleChoice.length).fill(''));
const showResults = ref(false);
const score = ref(0);

computed(() =>
    ((currentIndex.value + 1) / multipleChoice.length) * 100
);

// 当前问题
const currentQuestion = computed(() =>
    enhancedQuestions.value[currentIndex.value]
);

// 检查选项是否被选中
const isSelected = (letter: string) =>
    userAnswers.value[currentIndex.value].includes(letter);

// 选择选项
const selectOption = (letter: string) => {
  const currentAnswer = userAnswers.value[currentIndex.value];
  if (currentQuestion.value.isMultiple) {
    // 多选处理
    if (currentAnswer.includes(letter)) {
      // 取消选择
      userAnswers.value[currentIndex.value] = currentAnswer.replace(letter, '');
    } else {
      // 添加选择
      userAnswers.value[currentIndex.value] = currentAnswer + letter;
    }
  } else {
    // 单选处理
    userAnswers.value[currentIndex.value] = letter;
  }
};

// 上一题
const prevQuestion = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

// 下一题
const nextQuestion = () => {
  if (currentIndex.value < multipleChoice.length - 1) {
    currentIndex.value++;
  }
};

// 完成测试
const finishTest = () => {
  // 计算得分
  let correctCount = 0;
  const incorrectList = []; // 临时存储错题

  for (let i = 0; i < multipleChoice.length; i++) {
    const userAnswer = [...userAnswers.value[i]].sort().join('');
    const correctAnswer = [...multipleChoice[i].answer].sort().join('');

    if (userAnswer === correctAnswer) {
      correctCount++;
    } else {
      // 如果答错，记录题目、用户答案及正确答案
      incorrectList.push({
        question: multipleChoice[i].question,
        userAnswer: userAnswer || '未作答',
        correctAnswer,
      });
    }
  }

  score.value = correctCount;
  incorrectQuestions.value = incorrectList; // 保存错题信息
  showResults.value = true;
};

// 获取反馈消息
const getFeedbackMessage = () => {
  const percent = (score.value / multipleChoice.length) * 100;

  if (percent >= 90) return '太棒了！您已经掌握了这些知识点！';
  if (percent >= 70) return '做得很好！继续努力！';
  if (percent >= 50) return '不错的尝试！复习一下会更好！';
  return '需要更多练习，加油！';
};

// 获取反馈类名
const getFeedbackClass = computed(() => {
  const percent = (score.value / multipleChoice.length) * 100;

  if (percent >= 90) return 'excellent';
  if (percent >= 70) return 'good';
  if (percent >= 50) return 'average';
  return 'poor';
});

// 重新测试
const restartTest = () => {
  currentIndex.value = 0;
  userAnswers.value = Array(multipleChoice.length).fill('');
  showResults.value = false;
  score.value = 0;
};

// 卡片翻转状态
const isFlipped = ref(true); // 是否翻转

// 切换卡片翻转状态
const toggleFlip = () => {
  isFlipped.value = !isFlipped.value;
};
</script>

<template>
  <div :class="['container', { 'dark-mode': isDarkMode }]">
    <div class="header">
      <Light class="dark-mode-btn" @click="toggleDarkMode" v-if="!isDarkMode" />
      <Dark class="dark-mode-btn" @click="toggleDarkMode" v-else />
      <h1>软件质量管理</h1>
      <div class="tab-container">
        <button
            class="tab-btn"
            :class="{ active: !isShortAnswerTab }"
            @click="isShortAnswerTab = false"
        >
          选择题
        </button>
        <button
            class="tab-btn"
            :class="{ active: isShortAnswerTab }"
            @click="isShortAnswerTab = true"
        >
          简答题
        </button>
      </div>
    </div>

    <!-- 选择题部分 -->
    <div v-if="!isShortAnswerTab">
      <div v-if="!showResults" class="question-container">
        <div class="question-header">
          <div class="link-container">
            <a href="https://ziqingchuan.github.io/SSD/" target="_blank" class="link-btn">
              软件系统设计复习网站
            </a>
          </div>
        </div>

        <div class="question-content">{{ currentQuestion.question.split('\n\n')[0] }}</div>

        <div class="options-container">
          <div
              v-for="(option, idx) in currentQuestion.options"
              :key="idx"
              class="option"
              :class="{ selected: isSelected(option.letter) }"
              @click="selectOption(option.letter)"
          >
            <div class="option-letter">{{ option.letter }}</div>
            <div class="option-text">{{ option.text }}</div>
          </div>
        </div>

        <div class="controls">
          <button
              class="btn btn-prev"
              @click="prevQuestion"
              :disabled="currentIndex === 0"
          >
            <i class="fas fa-arrow-left"></i> 上一题
          </button>

          <button
              v-if="currentIndex < multipleChoice.length - 1"
              class="btn btn-next"
              @click="nextQuestion"
          >
            下一题 <i class="fas fa-arrow-right"></i>
          </button>

          <button
              v-else
              class="btn btn-finish"
              @click="finishTest"
          >
            完成测试 <i class="fas fa-check"></i>
          </button>
        </div>
      </div>

      <div v-else class="result-container">
        <h2 class="result-title">测试完成!</h2>
        <div class="score-circle">
          <div class="score-text">{{ score }} / {{ multipleChoice.length }}</div>
        </div>

        <div class="feedback" :class="getFeedbackClass">
          {{ getFeedbackMessage() }}
        </div>

        <div v-if="incorrectQuestions.length" class="incorrect-questions">
          <h3>您答错的题目：</h3>
          <div
              v-for="(item, index) in incorrectQuestions"
              :key="index"
              class="incorrect-question"
          >
            <p>{{ item.question }}</p>
            <p><strong>您的答案：</strong> {{ item.userAnswer }}</p>
            <p><strong>正确答案：</strong> {{ item.correctAnswer }}</p>
          </div>
        </div>

        <button class="restart-btn" @click="restartTest">
          <i class="fas fa-redo"></i> 重新测试
        </button>
      </div>
    </div>

    <!-- 简答题部分 -->
    <div v-else class="short-answer-container">
      <div class="question-header">
        <div class="link-container">
          <a href="https://ziqingchuan.github.io/SSD/" target="_blank" class="link-btn">
            软件系统设计复习网站
          </a>
        </div>
      </div>
      <div class="short-answer-question">{{ currentShortAnswer.question }}</div>
      <div class="short-answer-answer" @click="toggleFlip">
        <p v-if="!isFlipped">{{ currentShortAnswer.answer }}</p>
        <div v-else class="thinking-mode">
          <Thinking />
          <span>答案是什么来着？</span>
        </div>
      </div>
      <div class="controls">
        <button
            class="btn btn-prev"
            @click="prevShortAnswer"
            :disabled="shortAnswerIndex === 0"
        >
          <i class="fas fa-arrow-left"></i> 上一题
        </button>
        <button
            class="btn btn-next"
            @click="nextShortAnswer"
            :disabled="shortAnswerIndex === shortAnswer.length - 1"
        >
          下一题 <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: white;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.header {
  background: linear-gradient(135deg, #5767bb, #26d0ce);
  color: white;
  padding: 25px 30px;
  text-align: center;
  height: 150px;
}

.header h1 {
  font-size: 2.2rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.question-container {
  padding: 30px;
  min-height: 400px;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
}

.question-content {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #333;
  font-weight: 500;
}

.options-container {
  display: grid;
  gap: 15px;
}

.option {
  padding: 18px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.option:hover {
  border-color: #5767bb;
  background: #f8f9ff;
  transform: translateY(-2px);
}

.option.selected {
  border-color: #70c9c8;
  background: #e6f7ff;
  box-shadow: 0 5px 15px rgba(26, 41, 128, 0.1);
}

.option-letter {
  background: #5767bb;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  flex-shrink: 0;
}

.option.selected .option-letter {
  background: #26d0ce;
}

.controls {
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-prev {
  background: #f0f0f0;
  color: #555;
}

.btn-prev:hover:not(:disabled) {
  background: #e0e0e0;
  color: #333;
}

.btn-next, .btn-finish {
  background: linear-gradient(120deg, #5767bb, #26d0ce);
  color: white;
}

.btn-next:hover:not(:disabled), .btn-finish:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(26, 41, 128, 0.2);
}

.result-container {
  padding: 40px 30px;
  text-align: center;
}

.result-title {
  font-size: 2.2rem;
  color: #5767bb;
  margin-bottom: 20px;
}

.score-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5767bb, #26d0ce);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
}

.score-text {
  font-size: 40px;
  font-weight: bold;
}

.restart-btn {
  background: linear-gradient(135deg, #5767bb, #26d0ce);;
  color: white;
  padding: 16px 45px;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.restart-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
}

.feedback {
  margin-top: 30px;
  font-size: 1.4rem;
  color: #5767bb;
  font-weight: 600;
}

.feedback.excellent {
  color: #00c853;
}

.feedback.good {
  color: #4caf50;
}

.feedback.average {
  color: #ff9800;
}

.feedback.poor {
  color: #ff5252;
}
.incorrect-questions {
  margin-top: 30px;
  text-align: left;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.incorrect-questions h3 {
  color: #e53935;
  margin-bottom: 20px;
  font-size: 1.4rem;
}

.incorrect-question {
  margin-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
}

.incorrect-question:last-child {
  border-bottom: none;
}

.incorrect-question p {
  margin: 5px 0;
  color: #333;
  white-space: pre-line;
}

.incorrect-question strong {
  color: #5767bb;
}
.tab-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.tab-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: #f0f0f0;
  color: #555;
  cursor: pointer;
  font-weight: bold;
  width: 100px;
  transition: all 0.3s ease;
}

.tab-btn.active {
  background: linear-gradient(135deg, #5767bb, #26d0ce);
  color: white;
}

.tab-btn:hover:not(.active) {
  background: #e0e0e0;
}

.short-answer-container {
  padding: 30px;
}

.short-answer-question {
  text-align: left;
  font-size: 1.25rem;
  margin-bottom: 20px;
}

.short-answer-answer {
  text-align: left;
  font-size: 1.2rem;
  color: #333;
  background: #fdfcfc;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  padding: 20px;
  white-space: pre-line;
  box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.05);
}

.link-btn {
  display: inline-block;
  padding: 6px 14px;
  background: linear-gradient(120deg, #5767bb, #26d0ce);
  color: white;
  text-decoration: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  transition: all 0.3s ease;
  text-align: center;
}

.link-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(26, 41, 128, 0.2);
}
/* 暗色模式整体背景和默认文字颜色 */
.dark-mode {
  background: #1e1e1e;
  color: #e0e0e0;
}

/* Header 区域 */
.dark-mode .header {
  background: linear-gradient(135deg, #333, #444);
  color: #ffffff;
}

/* Tab 按钮 */
.dark-mode .tab-btn {
  background: #333333;
  color: #e0e0e0;
}

.dark-mode .tab-btn.active {
  background: linear-gradient(135deg, #444, #555);
  color: #ffffff;
}

.dark-mode .tab-btn:hover {
  background: #444444;
}

/* 选择题容器 */
.dark-mode .question-container {
  background: #1e1e1e;
  color: #e0e0e0;
}

/* 问题内容 */
.dark-mode .question-content {
  color: #d0d0d0;
}

/* 选项容器 */
.dark-mode .options-container .option {
  background: #262626;
  border-color: #444444;
  color: #e0e0e0;
}

.dark-mode .options-container .option:hover {
  border-color: #5767bb;
  background: #2c2c2c;
}

.dark-mode .options-container .option.selected {
  border-color: #26d0ce;
  background: #333333;
  color: #ffffff;
}

.dark-mode .options-container .option .option-letter {
  background: #444444;
}

.dark-mode .options-container .option.selected .option-letter {
  background: #26d0ce;
}

/* 按钮样式 */
.dark-mode .btn {
  background: #333333;
  color: #ffffff;
}

.dark-mode .btn:hover:not(:disabled) {
  background: #444444;
  color: #ffffff;
}

.dark-mode .btn-prev {
  background: #2c2c2c;
}

.dark-mode .btn-prev:hover:not(:disabled) {
  background: #3c3c3c;
}

.dark-mode .btn-next,
.dark-mode .btn-finish {
  background: linear-gradient(135deg, #444, #555);
}

.dark-mode .btn-next:hover:not(:disabled),
.dark-mode .btn-finish:hover:not(:disabled) {
  background: #555555;
}

/* 测试结果容器 */
.dark-mode .result-container {
  background: #1e1e1e;
  color: #ffffff;
}

.dark-mode .score-circle {
  background: linear-gradient(135deg, #333, #444);
  color: #ffffff;
}

.dark-mode .feedback {
  color: #26d0ce;
}

.dark-mode .feedback.excellent {
  color: #00e676;
}

.dark-mode .feedback.good {
  color: #66bb6a;
}

.dark-mode .feedback.average {
  color: #ffa726;
}

.dark-mode .feedback.poor {
  color: #ef5350;
}

/* 错题列表 */
.dark-mode .incorrect-questions {
  background: #1e1e1e;
  border-color: #333333;
  color: #cfcfcf;
}

.dark-mode .incorrect-question {
  border-bottom: 1px solid #444444;
}

.dark-mode .incorrect-question:last-child {
  border-bottom: none;
}

.dark-mode .incorrect-question p {
  color: #e0e0e0;
}

.dark-mode .incorrect-question strong {
  color: #26d0ce;
}

/* 简答题容器 */
.dark-mode .short-answer-container {
  background: #1e1e1e;
  color: #e0e0e0;
}

.dark-mode .short-answer-question {
  color: #d0d0d0;
}

.dark-mode .short-answer-answer {
  background: #262626;
  border: 1px solid #444444;
  color: #cfcfcf;
}

/* 链接按钮 */
.dark-mode .link-btn {
  background: #333333;
  color: #ffffff;
}

.dark-mode .link-btn:hover {
  background: #444444;
}

/* 切换按钮样式 */
.dark-mode-btn {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 10px;
  transition: all 0.5s ease;
}

.dark-mode-btn:hover {
  transform: translateY(10px);
}

.thinking-mode {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>