<script setup>
import { NavigationMenuLink } from './'

const props = defineProps({
  title: { type: String, required: false },
  description: { type: String, required: false },
  href: { type: String, required: true }
})
</script>

<template>
  <li>
    <NavigationMenuLink asChild>
      <router-link
        :to="props.href"
        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div class="font-inter text-sm font-medium leading-none">{{ props.title }}</div>
        <p class="line-clamp-2 font-inter text-xs leading-snug text-muted-foreground">
          {{ props.description }}
        </p>
      </router-link>
    </NavigationMenuLink>
  </li>
</template>
