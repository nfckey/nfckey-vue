<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { useCarousel } from './useCarousel'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const props = defineProps({
  class: { type: null, required: false }
})

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="
      cn(
        'absolute h-8 w-8 touch-manipulation rounded-full p-0',
        orientation === 'horizontal'
          ? '-bottom-12 right-[calc(50%-2.5rem)] -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class
      )
    "
    variant="outline"
    @click="scrollNext"
  >
    <slot>
      <ArrowRight class="h-4 w-4 text-current" />
    </slot>
  </Button>
</template>
