import SkillBox from './SkillBox';
import { skills } from './SkillData';

export default function Skill() {
	return (
    <section className="content">
		{skills.map((skill, idx) => (
			<SkillBox key={idx} skill={skill} />
		))}
	</section>
	);
}