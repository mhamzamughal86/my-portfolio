import skills from '~/components/skills.vue'
import projects from '~/components/projects.vue'
import experience from '~/components/experience.vue'

export const navigation = [
  { name: 'Skills', id: 'skill', component: skills },
  { name: 'Experience', id: 'experience', component: experience },
  { name: 'Projects', id: 'project', component: projects },
]
