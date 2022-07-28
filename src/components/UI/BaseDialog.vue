<template>
  <teleport to="body" >
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog" @click.stop>
      <dialog open v-if="show" :class="{'transparent-background':!title}">
        <header v-if="title">
          <slot name="header">
            <h2>{{ title }}</h2> 
            <!-- <base-button @click="tryClose">Close</base-button> -->
          </slot>
        </header>
        <section>
          <slot></slot>
        </section>
        <menu v-if="!fixed">
          <slot name="actions">
             <base-button   class="button" @click="actionTask" v-if="confirm" >Confirmer</base-button>
            <base-button  class="button" @click="tryClose">Fermer</base-button>
          </slot>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
    confirm: {
      type: Boolean,
      required: false,
    },
  },
  emits: ["close","actionTask"],
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit("close");
    },
    actionTask() {
      if (!this.confirm) {
        return;
      }
      this.$emit("actionTask");
    }
  },
};
</script>

<style scoped>
.button{
    margin-inline: 0.2rem;

}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

.transparent-background{
  background-color: transparent;
  box-shadow: none;
}

header {
  background-color: #00b1b2;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
