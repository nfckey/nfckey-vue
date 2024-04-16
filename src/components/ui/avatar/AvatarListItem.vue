<script setup>
defineProps({
  person: Object
})

const getImageUrl = (name) => {
  return new URL(`../../../assets/${name}`, import.meta.url).href
}

const getSocialIcon = (name) => {
  return getImageUrl('icons/icon-' + name.toLowerCase() + '.svg')
}
</script>

<template>
  <div class="team__person">
    <img class="team__person__avatar" :src="getImageUrl('team/' + person.imageUrl)" />
    <div class="team__person__content">
      <p class="team__person__name">
        {{ person.name }}
      </p>
      <p class="team__person__role">
        {{ person.role }}
      </p>
    </div>
    <div class="team__person__socials">
      <a
        v-for="(social, index) in person.socials"
        :key="index"
        :href="social.href"
        class="team__person__socials__social"
      >
        <img :src="getSocialIcon(social.name)" :alt="social.name" loading="lazy" />
      </a>
    </div>
  </div>
</template>
