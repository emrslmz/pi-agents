<template>
  <div>
    <resources />
  </div>
</template>

<script>
export default {
  name: 'ResourcesHome',
  components: {
    Resources: () => import('@/modules/main/resources/components/Resources.vue'),
  },
};
</script>
