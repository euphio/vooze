<template>
  <styled-wrapper
    @mouseover="toggleIsHovered(true)"
    @mouseleave="toggleIsHovered(false)"
    :open="sidebar.isOpen"
    :isCollapsed="sidebar.isCollapsed"
    :isHovered="sidebar.isHovered"
    :isNeumorphic="
      settings.cardStyleId === 'neumorphic' && settings.themeModeId === 'light'
    "
  >
    <sidebar-nav
      :isCollapsed="sidebar.isCollapsed"
      :isHovered="sidebar.isHovered"
    />
  </styled-wrapper>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import styled from "vue-styled-components";

const theProps = {
  open: Boolean,
  isCollapsed: Boolean,
  isHovered: Boolean,
  isNeumorphic: Boolean
};

const StyledWrapper = styled("div", theProps)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background: ${props =>
    props.isNeumorphic
      ? props.theme.colorCardBackgroundNeu
      : props.theme.colorSidebar};

  color: white;
  padding-top: 0;
  transform: ${props => (props.open ? "translateX(0)" : "translateX(-200px)")};
  transition: transform 0.25s;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    transform: translateX(
      ${props => (!props.isCollapsed || props.isHovered ? "0" : "-136px")}
    );
    z-index: 10;
    padding-top: 72px;

    ${props =>
      props.isCollapsed && !props.isHovered
        ? "display: flex; align-items: flex-start; justify-content: flex-end;"
        : ""}
  }
`;

import SidebarNav from "./SidebarNav";
export default {
  props: theProps,
  components: {
    StyledWrapper,
    SidebarNav
  },
  methods: {
    ...mapActions(["toggleIsHovered"])
  },
  computed: mapGetters(["sidebar", "settings"])
};
</script>
