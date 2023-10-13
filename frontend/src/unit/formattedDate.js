import { computed } from 'vue';
import { config } from '@/stores';

export const formattedDate = computed(() => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return config().date.toLocaleDateString('zh-CN', options);
});