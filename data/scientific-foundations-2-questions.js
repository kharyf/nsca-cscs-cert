const SF2_QUESTIONS = [
  {
    "id": "SF2-EX-001",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Muscle Physiology",
    "cognitiveLevel": "Analysis",
    "text": "A collegiate 400 m sprinter completes a 12-week block of heavy resistance and sprint training; a vastus lateralis biopsy shows the Type IIx myosin heavy chain proportion has fallen from 11% to 4%, with a corresponding rise in Type IIa. She then sustains a non-lower-limb injury and performs no training for 8 weeks. A repeat biopsy is taken at the end of that layoff. What is the most likely finding regarding Type IIx content?",
    "options": [
      {
        "letter": "A",
        "text": "Type IIx content continues to fall toward zero, because the Type IIa phenotype is the stable default expression in untrained human muscle"
      },
      {
        "letter": "B",
        "text": "Type I fibers convert to Type IIa during the layoff, preserving the athlete's power output while total fiber number declines"
      },
      {
        "letter": "C",
        "text": "Type IIx content rebounds and transiently exceeds her original pre-training percentage before settling back toward baseline"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Heavy training drives a IIx-to-IIa myosin heavy chain shift, and on detraining that shift not only reverses but overshoots, with IIx content transiently rising above the original untrained value. Option A inverts the direction of the detraining response: IIa is the trained, not the untrained, phenotype, and IIx re-expression is what occurs when the training stimulus is withdrawn. Option B is wrong on two counts, since Type I to Type II conversion is not a documented response to inactivity and detraining reduces rather than preserves power output."
  },
  {
    "id": "SF2-EX-002",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Muscle Physiology",
    "cognitiveLevel": "Analysis",
    "text": "Forty-eight hours after an unaccustomed high-volume eccentric session, a rugby forward is retested. Maximal voluntary isometric knee extension has recovered to 92% of baseline, and force evoked by high-frequency (100 Hz) electrical stimulation of the quadriceps is 96% of baseline, but force evoked by low-frequency (20 Hz) stimulation is only 61% of baseline. Muscle glycogen has been fully restored. Which mechanism best explains this pattern?",
    "options": [
      {
        "letter": "A",
        "text": "Residual central fatigue, with incomplete voluntary drive to the motor pool limiting force output"
      },
      {
        "letter": "B",
        "text": "Impaired excitation-contraction coupling, with less calcium released per action potential, which limits force disproportionately at low stimulation frequencies"
      },
      {
        "letter": "C",
        "text": "Depletion of phosphocreatine and glycogen within Type II fibers restricting cross-bridge cycling rate"
      }
    ],
    "correctAnswer": "B",
    "explanation": "This is the classic prolonged low-frequency force depression seen after eccentric work: damage to the sarcoplasmic reticulum and t-tubule system reduces calcium release per impulse, and because low-frequency stimulation sits on the steep part of the calcium-force relationship, force loss appears there while high-frequency stimulation still saturates the myofilaments and looks near-normal. Option A cannot explain the deficit because electrically evoked force bypasses the central nervous system entirely, yet the deficit is present in evoked contractions. Option C is ruled out by the stem, which states glycogen is restored, and phosphocreatine resynthesis is complete within minutes to hours, not 48 hours."
  },
  {
    "id": "SF2-EX-003",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Muscle Physiology",
    "cognitiveLevel": "Application",
    "text": "A strength coach measures a soccer player's maximal isometric hip extension torque in two prone positions: once with the knee held extended, and once with the knee held flexed to 90 degrees. Hip extension torque is substantially lower with the knee flexed. Which explanation best accounts for the reduced hamstring contribution in the knee-flexed position?",
    "options": [
      {
        "letter": "A",
        "text": "Active insufficiency: the hamstrings are simultaneously shortened at the knee and the hip, moving sarcomeres past optimal actin-myosin overlap and reducing force capacity"
      },
      {
        "letter": "B",
        "text": "Passive insufficiency of the rectus femoris, whose anterior passive tension mechanically opposes the hip extension effort"
      },
      {
        "letter": "C",
        "text": "Autogenic inhibition, as Golgi tendon organs in the shortened hamstring detect rising tension and reflexively reduce its activation"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The hamstrings are biarticular, so flexing the knee shortens them distally while hip extension shortens them proximally; the sarcomeres end up on the descending portion of the length-tension relationship with reduced filament overlap, which is active insufficiency. Option B describes a real phenomenon, but rectus femoris passive tension with a flexed knee limits hip extension range of motion, not the hamstring's intrinsic force-generating capacity, and in an isometric test at a fixed angle it is not the operative constraint. Option C misapplies autogenic inhibition, which is triggered by high tension and is not a length-dependent effect, and the knee-flexed position produces less hamstring tension, not more."
  },
  {
    "id": "SF2-EX-004",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Muscle Physiology",
    "cognitiveLevel": "Analysis",
    "text": "A 28-year-old professional rugby player who trained consistently for six years takes a six-month layoff after shoulder surgery and loses a substantial amount of upper body muscle cross-sectional area. On returning to training he regains that cross-sectional area within about ten weeks, far faster than the two years it originally took him to build it. Which mechanism best explains the accelerated re-acquisition of muscle size?",
    "options": [
      {
        "letter": "A",
        "text": "Resting muscle protein synthesis rate remained chronically elevated in the previously trained fibers throughout the layoff"
      },
      {
        "letter": "B",
        "text": "Androgen receptor content in the previously trained fibers remained elevated, amplifying the anabolic response to each session"
      },
      {
        "letter": "C",
        "text": "Myonuclei added by satellite cell fusion during the original training years were retained through detraining, so each fiber can expand its cytoplasm without first building new nuclei"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Myonuclei accrued during hypertrophy are largely retained during atrophy and detraining, so the previously trained fiber already possesses the transcriptional machinery to support a larger myonuclear domain and can re-expand without repeating the slow satellite-cell-dependent step. Option A is wrong because resting muscle protein synthesis falls back toward or below baseline during inactivity, which is precisely why the atrophy occurred. Option B is wrong because androgen receptor content is highly training-responsive and downregulates with detraining rather than persisting, and receptor density alone would not explain the fiber's preserved capacity for volume expansion."
  },
  {
    "id": "SF2-EX-005",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Muscle Physiology",
    "cognitiveLevel": "Recall",
    "text": "Which event in the cross-bridge cycle is directly dependent on the binding of a new ATP molecule to the myosin head, as opposed to being driven by ATP hydrolysis or by calcium availability?",
    "options": [
      {
        "letter": "A",
        "text": "Detachment of the myosin head from the actin binding site"
      },
      {
        "letter": "B",
        "text": "Repositioning of the myosin head into its high-energy cocked configuration"
      },
      {
        "letter": "C",
        "text": "Displacement of tropomyosin away from the myosin binding sites on actin"
      }
    ],
    "correctAnswer": "A",
    "explanation": "ATP binding to the myosin head reduces myosin's affinity for actin and causes cross-bridge detachment, which is why the absence of ATP after death produces the sustained attachment of rigor mortis. Option B is caused by the subsequent hydrolysis of that bound ATP to ADP and inorganic phosphate, which re-cocks the head rather than by the binding step itself. Option C is driven by calcium binding to troponin C, which shifts the troponin-tropomyosin complex and exposes the binding sites, and is independent of ATP binding."
  },
  {
    "id": "SF2-EX-006",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Muscle Physiology",
    "cognitiveLevel": "Application",
    "text": "A well-trained female weightlifter can control the lowering of a load approximately 130% of her concentric bench press 1RM. Surface EMG collected during her maximal eccentric attempts shows amplitude slightly lower than during her maximal concentric attempts. Which explanation best accounts for the greater eccentric force despite lower measured activation?",
    "options": [
      {
        "letter": "A",
        "text": "Eccentric actions recruit a larger pool of high-threshold motor units than maximal concentric actions, and the surface EMG simply fails to detect the deeper units"
      },
      {
        "letter": "B",
        "text": "During lengthening, force is shared between attached cross-bridges that resist forcible detachment and passive elastic structures such as titin, so higher force is produced per unit of neural activation"
      },
      {
        "letter": "C",
        "text": "Cross-bridge cycling slows during lengthening, which raises ATP turnover per cross-bridge and therefore raises force output per unit of activation"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Maximal eccentric force exceeds maximal concentric force because attached cross-bridges are mechanically strained and resist detachment during lengthening while non-contractile elastic elements, notably titin, contribute additional passive force, so total force rises even though voluntary drive does not. Option A contradicts the observation in the stem and the literature, since maximal eccentric actions are characteristically accompanied by lower, not greater, neural activation, an effect usually attributed to neural inhibition. Option C reverses the metabolic reality, because eccentric actions have a lower ATP cost per unit of force than concentric actions, and higher ATP turnover is in any case a consequence of cycling rate rather than a cause of force."
  },
  {
    "id": "SF2-EX-007",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Neuromuscular Physiology",
    "cognitiveLevel": "Recall",
    "text": "In large limb muscles such as the quadriceps and the deltoid, motor unit recruitment is generally complete at approximately what percentage of maximal voluntary contraction, beyond which further increases in force are produced almost entirely by increases in firing rate?",
    "options": [
      {
        "letter": "A",
        "text": "Approximately 50% of maximal voluntary contraction"
      },
      {
        "letter": "B",
        "text": "Approximately 80% to 85% of maximal voluntary contraction"
      },
      {
        "letter": "C",
        "text": "Approximately 95% to 100% of maximal voluntary contraction"
      }
    ],
    "correctAnswer": "B",
    "explanation": "In large muscles, recruitment of the available motor unit pool is essentially complete near 80% to 85% of maximal voluntary contraction, and additional force above that point comes from rate coding. Option A is the value characteristic of small muscles such as the adductor pollicis and first dorsal interosseous, where recruitment ceases near 50% of maximum and rate coding governs the remaining half of the force range, so it is the right number applied to the wrong muscle group. Option C would leave essentially no range over which rate coding operates, which contradicts the established recruitment-plus-rate-coding model of force gradation."
  },
  {
    "id": "SF2-EX-008",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Neuromuscular Physiology",
    "cognitiveLevel": "Analysis",
    "text": "A hurdler completes six weeks of daily static hamstring stretching. Passive straight-leg-raise range of motion improves by 12 degrees. However, laboratory testing shows the passive torque-angle curve is unchanged at any common joint angle, ultrasound shows no change in fascicle length, and surface EMG is silent during the passive stretch both before and after the intervention. What is the most defensible interpretation?",
    "options": [
      {
        "letter": "A",
        "text": "Sarcomeres were added in series, lengthening the muscle fascicles and shifting the length-tension relationship"
      },
      {
        "letter": "B",
        "text": "A chronic reduction in resting motor unit activity allowed the muscle to be lengthened further before reflex resistance was encountered"
      },
      {
        "letter": "C",
        "text": "Stretch tolerance increased: the athlete now tolerates a greater passive torque and a greater discomfort level before terminating the stretch, without any change in tissue mechanical properties"
      }
    ],
    "correctAnswer": "C",
    "explanation": "When range of motion improves but the passive torque-angle relationship and tissue architecture are unchanged, the gain must come from a change in the sensation endpoint rather than the tissue, which is the increased stretch tolerance mechanism now regarded as the dominant explanation for chronic range of motion gains from static stretching. Option A is directly refuted by the unchanged fascicle length on ultrasound, which is the measurement that would reveal serial sarcomere addition. Option B is refuted by the silent EMG both before and after, since there was no reflex muscle activity during the passive stretch to reduce in the first place."
  },
  {
    "id": "SF2-EX-009",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Neuromuscular Physiology",
    "cognitiveLevel": "Analysis",
    "text": "A volleyball player performs depth jumps from a 30 cm box and reaches a rebound jump height of 46 cm with a ground contact time of 0.21 s. When the box is raised to 90 cm, her rebound jump height falls to 39 cm and ground contact time lengthens to 0.38 s. Which analysis best explains the drop in performance at the higher drop height?",
    "options": [
      {
        "letter": "A",
        "text": "The eccentric load exceeded what she can absorb rapidly; the prolonged amortization phase allowed stored elastic energy to dissipate as heat and reduced the contribution of the stretch reflex to the concentric phase"
      },
      {
        "letter": "B",
        "text": "The higher drop desensitized the muscle spindles, so the myotatic reflex no longer contributed to the concentric phase"
      },
      {
        "letter": "C",
        "text": "The higher drop increased landing velocity, and by the force-velocity relationship the faster lengthening reduced the force her muscles could produce during the eccentric phase"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The efficiency of the stretch-shortening cycle depends on a short amortization phase; when drop height exceeds the athlete's capacity, contact time nearly doubles, elastic energy stored in the series elastic component is dissipated as heat instead of being returned, and inhibitory feedback blunts the reflex contribution, so rebound height falls. Option B invents an implausible mechanism, since a faster and larger stretch increases rather than decreases muscle spindle discharge; the reflex contribution is reduced by inhibition and by the time delay, not by spindle desensitization. Option C misapplies the force-velocity relationship, which describes declining force with increasing shortening velocity in concentric actions; during lengthening, force is maintained or increases as velocity rises, so higher eccentric velocity does not reduce force capacity."
  },
  {
    "id": "SF2-EX-010",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Neuromuscular Physiology",
    "cognitiveLevel": "Application",
    "text": "Intramuscular recordings from an experienced weightlifter during maximal-effort ballistic pulls show that many motor units discharge their first two or three action potentials at instantaneous frequencies exceeding 100 Hz before settling to a much lower steady rate. What is the primary performance consequence of this discharge pattern?",
    "options": [
      {
        "letter": "A",
        "text": "It raises maximal isometric force by recruiting motor units that lie above the normal recruitment ceiling of voluntary effort"
      },
      {
        "letter": "B",
        "text": "It reflects motor unit synchronization, which elevates peak force but has little influence on how quickly force is developed"
      },
      {
        "letter": "C",
        "text": "It exploits the catch-like property of muscle, producing disproportionately large early force and therefore a higher rate of force development"
      }
    ],
    "correctAnswer": "C",
    "explanation": "These brief high-frequency doublets take advantage of the catch-like property, in which a very short initial interspike interval produces a force output far greater than the subsequent steady firing rate alone would generate, which markedly increases the rate of force development in explosive actions. Option A is wrong because doublet firing is a rate coding phenomenon within already-recruited units and does not add units beyond the recruitable pool; peak isometric force is largely unchanged. Option B conflates two distinct phenomena, since synchronization is the temporal alignment of discharges across different motor units rather than a within-unit interval effect, and in any case synchronization is thought to affect rate of force development more than maximal force."
  },
  {
    "id": "SF2-EX-011",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Neuromuscular Physiology",
    "cognitiveLevel": "Application",
    "text": "During maximal isokinetic knee extension at 60 degrees per second, a strength coach compares two athletes matched for quadriceps cross-sectional area. The resistance-trained athlete produces 18% greater peak extension torque than the untrained athlete, and hamstring EMG amplitude recorded during the extension effort is markedly lower in the trained athlete. What is the most likely interpretation?",
    "options": [
      {
        "letter": "A",
        "text": "Reduced antagonist coactivation in the trained athlete, so a larger share of the quadriceps' output appears as net joint torque"
      },
      {
        "letter": "B",
        "text": "Relative hamstring weakness in the trained athlete, producing an unfavorable hamstring-to-quadriceps ratio that should be corrected before further extension training"
      },
      {
        "letter": "C",
        "text": "Greater Ia reciprocal inhibition acting on the quadriceps motor pool in the trained athlete, which is being offset by his larger neural drive"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Net joint torque equals agonist torque minus antagonist torque, so a trained athlete who has learned to reduce hamstring coactivation during maximal knee extension expresses more of the quadriceps' force as measurable torque even with identical muscle size. Option B misreads a task-specific EMG measurement as a strength deficit; hamstring EMG during a knee extension effort quantifies coactivation, not hamstring maximal capacity, and no hamstring maximal test was performed. Option C reverses the direction of the reflex, since Ia reciprocal inhibition from the contracting quadriceps acts to inhibit the antagonist hamstrings, and greater inhibition of the quadriceps would lower rather than raise their measured torque."
  },
  {
    "id": "SF2-EX-012",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Neuromuscular Physiology",
    "cognitiveLevel": "Analysis",
    "text": "An ultramarathon runner is tested before and immediately after a three-hour trail race. Maximal voluntary isometric knee extension torque has fallen 25%. Using the interpolated twitch technique, the extra force produced by a superimposed supramaximal stimulus during her maximal effort has risen from 3% of MVC before the race to 19% after. The electrically evoked resting twitch amplitude and the M-wave are both within 5% of their pre-race values. What does this pattern indicate?",
    "options": [
      {
        "letter": "A",
        "text": "Predominantly peripheral fatigue arising within the muscle fiber itself"
      },
      {
        "letter": "B",
        "text": "Predominantly central fatigue, reflecting a failure of voluntary drive to fully activate muscle that is still contractile"
      },
      {
        "letter": "C",
        "text": "A failure of neuromuscular transmission at the motor endplate"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A large superimposed twitch during a maximal effort means the nervous system is leaving force on the table, so voluntary activation has fallen, which is the definition of central fatigue; the preserved evoked twitch confirms the muscle can still generate force when stimulated directly. Option A is refuted by the near-normal resting twitch amplitude, which is the standard index of contractile, peripheral fatigue and would have to be depressed for peripheral fatigue to dominate. Option C is refuted by the essentially unchanged M-wave, which is the direct electrophysiological measure of sarcolemmal excitability and neuromuscular junction transmission."
  },
  {
    "id": "SF2-EX-013",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Biomechanics",
    "cognitiveLevel": "Application",
    "text": "An athlete performs a standing heel raise, rising onto the balls of the feet. Analyze the foot as a rigid lever with the axis at the metatarsophalangeal joints, the resistance being body weight transmitted downward through the tibia at the ankle, and the effort being Achilles tendon force applied at the calcaneus. How is this lever classified, and what does that imply about its mechanical advantage?",
    "options": [
      {
        "letter": "A",
        "text": "A first-class lever with a mechanical advantage less than 1, so muscle force must exceed the resistance"
      },
      {
        "letter": "B",
        "text": "A third-class lever with a mechanical advantage less than 1, as is typical of most human joints"
      },
      {
        "letter": "C",
        "text": "A second-class lever with a mechanical advantage greater than 1, so muscle force can be less than the resistance"
      }
    ],
    "correctAnswer": "C",
    "explanation": "With the axis at the metatarsophalangeal joints, the resistance at the ankle lies between that axis and the effort applied at the calcaneus, which defines a second-class lever; the effort arm is therefore longer than the resistance arm and mechanical advantage exceeds 1. Option A would require the axis to lie between the effort and the resistance, which is not the arrangement described. Option B correctly states the arrangement common to most human joints, but a third-class lever requires the effort to be applied between the axis and the resistance, and in this analysis the Achilles insertion is the most distant of the three points from the metatarsophalangeal axis, not the middle one."
  },
  {
    "id": "SF2-EX-014",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Biomechanics",
    "cognitiveLevel": "Application",
    "text": "A 12 kg dumbbell is held in the hand with the forearm horizontal. The perpendicular distance from the elbow axis to the dumbbell is 0.33 m. The forearm and hand together weigh 20 N, with their center of mass 0.15 m from the elbow axis. The elbow flexor group has an effective moment arm of 0.04 m. Using 9.81 m/s squared for gravitational acceleration, what elbow flexor force is required to hold this position statically?",
    "options": [
      {
        "letter": "A",
        "text": "Approximately 971 N"
      },
      {
        "letter": "B",
        "text": "Approximately 1046 N"
      },
      {
        "letter": "C",
        "text": "Approximately 1136 N"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The dumbbell weighs 12 times 9.81, or 117.7 N, producing 117.7 times 0.33, or 38.8 N-m of resistance torque; the segment adds 20 times 0.15, or 3.0 N-m, for a total of 41.8 N-m, and dividing by the 0.04 m flexor moment arm gives about 1046 N. Option A, 971 N, is the result of omitting the weight of the forearm and hand entirely and solving only for the dumbbell, which understates the demand. Option C, 1136 N, results from applying the 20 N segment weight at the dumbbell's 0.33 m moment arm rather than at the segment's own 0.15 m center of mass distance, which overstates the segment's contribution."
  },
  {
    "id": "SF2-EX-015",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Biomechanics",
    "cognitiveLevel": "Analysis",
    "text": "Two basketball players are tested on a force plate performing countermovement jumps. Athlete A has a body mass of 80 kg and generates a net vertical impulse of 200 N-s during the propulsion phase. Athlete B has a body mass of 95 kg and generates a net vertical impulse of 228 N-s. Which conclusion about jump height is correct?",
    "options": [
      {
        "letter": "A",
        "text": "Athlete A jumps higher, by roughly 2 to 3 cm"
      },
      {
        "letter": "B",
        "text": "Athlete B jumps higher, because the greater net vertical impulse necessarily produces the greater takeoff velocity"
      },
      {
        "letter": "C",
        "text": "Jump height cannot be ranked from these data without knowing each athlete's peak force and rate of force development"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Takeoff velocity equals net impulse divided by body mass, so Athlete A reaches 200 divided by 80, or 2.50 m/s, and Athlete B reaches 228 divided by 95, or 2.40 m/s; using height equal to velocity squared divided by twice gravity gives about 31.9 cm and 29.4 cm respectively, a difference of roughly 2.5 cm in Athlete A's favor. Option B ignores mass: impulse determines change in momentum, not velocity, so a larger impulse applied to a proportionally larger mass yields no advantage, and here it yields slightly less. Option C is wrong because net impulse and mass are mathematically sufficient to determine takeoff velocity and therefore jump height; peak force and rate of force development describe how the impulse was accumulated but add nothing to the height calculation."
  },
  {
    "id": "SF2-EX-016",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Biomechanics",
    "cognitiveLevel": "Application",
    "text": "A coach programming for peak mechanical power output notes that in loaded jump squats, power is maximized at very light relative loads. She now wants to select the load that maximizes peak mechanical power output in the power clean for a well-trained athlete. Which load range should she select?",
    "options": [
      {
        "letter": "A",
        "text": "50% to 60% of 1RM"
      },
      {
        "letter": "B",
        "text": "70% to 80% of 1RM"
      },
      {
        "letter": "C",
        "text": "85% to 95% of 1RM"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Peak power in weightlifting derivatives such as the power clean occurs at relatively heavy loads, generally around 70% to 80% of 1RM, because these movements permit high velocity even under substantial load, unlike jump squats where the optimal load is far lighter. Option A loads the bar too lightly for the power clean, sacrificing enough force that the force-velocity product falls below its peak, even though a similar percentage would be reasonable for some ballistic upper-body throws. Option C is heavy enough that bar velocity declines sharply, so despite high force the product of force and velocity falls; loads in that range are appropriate for maximal strength rather than peak power expression."
  },
  {
    "id": "SF2-EX-017",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Biomechanics",
    "cognitiveLevel": "Analysis",
    "text": "A springboard diver leaves the board in a layout position and then pulls into a tight tuck, reducing her moment of inertia about the somersault axis to approximately one-third of its layout value. Assuming negligible air resistance, what happens to her angular velocity and her angular momentum during the airborne phase?",
    "options": [
      {
        "letter": "A",
        "text": "Angular velocity approximately triples and angular momentum also approximately triples"
      },
      {
        "letter": "B",
        "text": "Angular velocity approximately increases ninefold, because moment of inertia varies with the square of the radius of gyration"
      },
      {
        "letter": "C",
        "text": "Angular velocity approximately triples while angular momentum remains constant"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Once the diver is airborne no external torque acts about her center of mass, so angular momentum, the product of moment of inertia and angular velocity, is conserved; cutting moment of inertia to one-third therefore triples angular velocity with no change in angular momentum. Option A violates conservation of angular momentum, which cannot be increased by an internal body-position change with no external torque available to supply it. Option B misapplies the squared radius relationship: the squaring is already embedded in the stated one-third reduction in moment of inertia, so applying it a second time double-counts the effect."
  },
  {
    "id": "SF2-EX-018",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Biomechanics",
    "cognitiveLevel": "Analysis",
    "text": "Compare a pennate muscle such as the vastus lateralis with a fusiform muscle of identical total muscle volume and identical specific tension. Which statement correctly describes the functional consequence of the pennate architecture?",
    "options": [
      {
        "letter": "A",
        "text": "It has a larger physiological cross-sectional area and therefore greater maximal force capacity, but a lower maximal shortening velocity and a smaller range of shortening"
      },
      {
        "letter": "B",
        "text": "It has a larger physiological cross-sectional area and a higher maximal shortening velocity, because the greater number of fibers act in parallel to shorten the muscle faster"
      },
      {
        "letter": "C",
        "text": "It has the same physiological cross-sectional area, but each fiber generates greater force because the oblique line of pull concentrates tension at the tendon"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pennation packs many short fibers obliquely into a given volume, which increases physiological cross-sectional area and therefore maximal force, but because each fiber is short and pulls at an angle to the tendon, maximal shortening velocity and total excursion are reduced. Option B gets the trade-off backwards: maximal shortening velocity depends on the number of sarcomeres arranged in series along a fiber, so the short fibers of a pennate muscle shorten more slowly, and adding fibers in parallel adds force rather than velocity. Option C is wrong on both counts, since pennation is precisely what increases physiological cross-sectional area relative to anatomical cross-sectional area, and the oblique angle actually costs force at the tendon by the cosine of the pennation angle rather than concentrating it."
  },
  {
    "id": "SF2-EX-019",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Biomechanics",
    "cognitiveLevel": "Application",
    "text": "A coach attaches heavy chains to a barbell for back squats so that progressively more chain links lift off the platform as the lifter ascends. What is the biomechanical rationale for this arrangement?",
    "options": [
      {
        "letter": "A",
        "text": "It converts the squat's ascending strength curve into a descending one, so the lifter is maximally challenged in the deep position"
      },
      {
        "letter": "B",
        "text": "It concentrates the external resistance in the bottom position where the lifter's mechanical advantage is poorest, loading the sticking point directly"
      },
      {
        "letter": "C",
        "text": "It increases external resistance as the lifter ascends, matching the squat's ascending strength curve so the load stays challenging through the range where mechanical advantage improves"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The squat has an ascending strength curve, meaning the lifter can generate progressively more external force as the joints extend, so a constant barbell load becomes relatively easy near lockout; chains add resistance as the bar rises, keeping the demand high across the full range. Option A is wrong because chains do not reverse the athlete's strength curve, which is a property of the lifter's changing moment arms and muscle lengths, and matching a resistance profile to a strength curve is the goal rather than inverting it. Option B describes the opposite of what chains do, since the links are coiled on the platform at the bottom, which unloads rather than loads the deep position."
  },
  {
    "id": "SF2-EX-020",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Bone & Connective Tissue",
    "cognitiveLevel": "Analysis",
    "text": "A 21-year-old female collegiate distance runner has trained 60 to 70 miles per week for three consecutive years with normal menstrual function, a healthy body mass index, and documented adequate energy availability. A DXA scan nevertheless shows femoral neck bone mineral density below age-matched norms. Which explanation best accounts for this finding?",
    "options": [
      {
        "letter": "A",
        "text": "Her running volume generates strain magnitudes well above the osteogenic threshold, but site-specific femoral neck adaptation lags whole-body bone mineral density by roughly 18 to 24 months, so the scan simply predates her adaptation"
      },
      {
        "letter": "B",
        "text": "Repetitive endurance running chronically elevates circulating parathyroid hormone, which shifts the remodeling balance toward net resorption specifically at weight-bearing skeletal sites"
      },
      {
        "letter": "C",
        "text": "Bone cells accommodate to repetitive, familiar, relatively low-magnitude strain distributions; osteogenic adaptation requires high-magnitude, high-rate loading applied in novel and varied strain distributions, which steady-state distance running does not supply"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bone's mechanosensors desensitize to habitual strain patterns: once a loading pattern becomes routine, additional repetitions of that same low-magnitude, unidirectional strain add little osteogenic signal, which is why runners frequently show unremarkable or low hip and spine bone mineral density while multidirectional-sport and resistance-trained athletes show higher values. C is correct because restoring the stimulus requires changing strain magnitude, rate, and distribution (jumping, cutting, heavy multi-joint lifting), not simply adding mileage. A is wrong because there is no 18-to-24-month site-specific lag rule, and after three years of consistent training any adaptation would already be detectable; the premise that running exceeds the osteogenic threshold at the femoral neck is itself the flawed assumption. B is wrong because although parathyroid hormone does rise transiently with endurance exercise, intermittent parathyroid hormone exposure is anabolic to bone rather than resorptive, and endurance training does not produce the sustained hyperparathyroid state that would drive net resorption."
  },
  {
    "id": "SF2-EX-021",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Bone & Connective Tissue",
    "cognitiveLevel": "Analysis",
    "text": "A group of previously sedentary military recruits begins a high-volume marching and running program. Loading is increased over the first two weeks and then held constant, yet the incidence of tibial stress fractures peaks between weeks 3 and 6 rather than during the initial ramp-up. Which explanation best accounts for this delayed peak in risk?",
    "options": [
      {
        "letter": "A",
        "text": "The bone remodeling cycle begins with osteoclastic resorption, which transiently increases cortical porosity; because osteoblastic formation and mineralization lag resorption by weeks to months, the bone is temporarily mechanically weaker before it becomes stronger"
      },
      {
        "letter": "B",
        "text": "Osteoblastic formation precedes resorption in the remodeling sequence, so the first weeks of adaptation deposit a large volume of unmineralized osteoid that cannot bear load until it calcifies"
      },
      {
        "letter": "C",
        "text": "Strength gains during the first weeks of any new program are almost entirely neural, so the musculature cannot yet attenuate ground reaction forces, while the bone itself has not begun to remodel at all"
      }
    ],
    "correctAnswer": "A",
    "explanation": "In a basic multicellular unit, osteoclasts resorb a cutting cone first and osteoblasts follow to refill it, and because the formation and mineralization phases take substantially longer than the resorption phase, a sudden increase in loading opens many remodeling sites at once and produces a transient window of elevated cortical porosity and reduced mechanical strength. A is correct because that window aligns with the observed 3-to-6-week risk peak. B is wrong because it reverses the remodeling sequence: resorption precedes formation, and osteoid deposition is a later step, not the first weeks' event. C is wrong on its second clause, which is the load-bearing one: early strength gains are indeed largely neural, but bone begins remodeling in response to the new strain environment almost immediately, so the claim that bone has not begun to remodel cannot explain a peak that occurs specifically after loading has stabilized."
  },
  {
    "id": "SF2-EX-022",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Bone & Connective Tissue",
    "cognitiveLevel": "Recall",
    "text": "On the tendon stress-strain curve, microfailure of individual collagen fibers begins to occur at approximately what level of strain (deformation expressed relative to the tendon's resting length)?",
    "options": [
      {
        "letter": "A",
        "text": "Approximately 2% to 4% strain"
      },
      {
        "letter": "B",
        "text": "Approximately 4% to 8% strain"
      },
      {
        "letter": "C",
        "text": "Approximately 12% to 15% strain"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Tendon loaded to roughly 4% strain or less returns to its original length once unloaded, and microfailure of individual collagen fibers begins in the region of about 4% to 8% strain, with gross macroscopic rupture occurring at strains beyond roughly 8% to 10%. B is correct. A is wrong because 2% to 4% spans the toe region and the early linear elastic region, where crimped collagen simply straightens and the tissue recovers fully. C is wrong because 12% to 15% strain is well past the point of complete tendon rupture, so no intact tendon reaches that strain with only microfailure present."
  },
  {
    "id": "SF2-EX-023",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Bone & Connective Tissue",
    "cognitiveLevel": "Application",
    "text": "A soccer player has just been cleared to begin loading after six weeks of knee immobilization. The rehabilitation plan prescribes several weeks of high-repetition, low-load, full-range knee motion before any heavy compressive loading is introduced. Which physiological rationale best supports this progression?",
    "options": [
      {
        "letter": "A",
        "text": "Articular cartilage is avascular and depends on cyclic compression and unloading to drive fluid and nutrient exchange with synovial fluid; immobilization reduces proteoglycan content and matrix stiffness, and cyclic low-load motion restores matrix quality before high compressive loads can be safely tolerated"
      },
      {
        "letter": "B",
        "text": "Immobilized ligaments lose tensile strength more rapidly than they lose stiffness, so low-load motion is needed to restore ligamentous stiffness first, because the ligaments must be competent before the cartilage can accept any compressive load"
      },
      {
        "letter": "C",
        "text": "Synovial fluid production is driven primarily by elevated intra-articular temperature, so light repetitive motion warms the joint and increases synovial volume, which must precede loading"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Adult articular cartilage has no blood supply and is nourished by the diffusion and convective pumping of synovial fluid that occurs when the joint is alternately compressed and unloaded, so immobilization degrades the proteoglycan-rich matrix and cyclic motion is the specific stimulus that restores it, which makes A correct. B is wrong because it inverts the relevant priority and misstates the mechanics: immobilization weakens ligament and its bony insertion sites, but ligamentous competence is not a prerequisite gate for cartilage to accept compression, and the progression described is driven by cartilage matrix recovery rather than ligament stiffness. C is wrong because synovial fluid nourishes cartilage through load-driven fluid exchange and diffusion, not through temperature-driven increases in fluid volume; warming a joint does not itself restore cartilage matrix."
  },
  {
    "id": "SF2-EX-024",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Bone & Connective Tissue",
    "cognitiveLevel": "Application",
    "text": "A 13-year-old baseball pitcher who has recently entered his period of peak height velocity reports progressive medial elbow pain that worsens with throwing volume. There was no single traumatic event. Which structural characteristic of the skeletally immature athlete best explains the injury pattern most likely present?",
    "options": [
      {
        "letter": "A",
        "text": "The ulnar collateral ligament is the weakest link in the immature elbow, because ligamentous tensile strength develops later than bone mineralization, so repetitive valgus stress produces a ligament tear before any bony injury"
      },
      {
        "letter": "B",
        "text": "The articular cartilage of the distal humerus is the weakest link, so repetitive valgus stress produces cartilage delamination on the medial side before any ligamentous or apophyseal injury"
      },
      {
        "letter": "C",
        "text": "During rapid growth the epiphyseal and apophyseal cartilage is weaker than the adjacent tendon and ligament, so repetitive valgus traction stress concentrates at the medial epicondylar apophysis and produces apophysitis rather than a ligament tear"
      }
    ],
    "correctAnswer": "C",
    "explanation": "In the skeletally immature athlete, and especially during the growth spurt, the cartilaginous physis and apophysis are the mechanically weakest structures in the kinetic chain, so repetitive tensile or traction loads fail there before they fail the stronger tendon or ligament, producing traction apophysitis of the medial epicondyle rather than an ulnar collateral ligament tear, which makes C correct. A is wrong because it reverses the relationship: the immature ligament is relatively strong compared with the adjacent open apophysis, which is precisely why ulnar collateral ligament tears are characteristic of skeletally mature throwers, not 13-year-olds. B is wrong because articular cartilage injury in the young thrower reflects lateral compressive overload at the capitellum, presenting as lateral rather than medial pain, and it is not the failure mode produced by medial traction."
  },
  {
    "id": "SF2-EX-025",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Bioenergetics",
    "cognitiveLevel": "Application",
    "text": "During a high-intensity interval, part of the substrate entering glycolysis in an athlete's vastus lateralis comes from intramuscular glycogen and part comes from blood glucose taken up by the fiber. Compared with one molecule of blood glucose, one glucosyl unit released from stored muscle glycogen yields how much net ATP through anaerobic glycolysis, and why?",
    "options": [
      {
        "letter": "A",
        "text": "The same net 2 ATP, because both substrates converge at glucose-6-phosphate and therefore require an identical ATP investment upstream of that point"
      },
      {
        "letter": "B",
        "text": "A net 3 ATP rather than 2, because glycogen phosphorylase releases glucose-1-phosphate, bypassing the ATP-consuming hexokinase step required to phosphorylate free glucose"
      },
      {
        "letter": "C",
        "text": "A net 4 ATP rather than 2, because glycogenolysis bypasses both the hexokinase step and the phosphofructokinase step"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Glycolysis has a gross yield of 4 ATP per hexose; free blood glucose must be phosphorylated by hexokinase (1 ATP) and again by phosphofructokinase (1 ATP), leaving a net of 2, whereas glycogen phosphorylase liberates glucose-1-phosphate that is converted to glucose-6-phosphate by phosphoglucomutase at no ATP cost, so only the phosphofructokinase investment remains and the net yield is 3, which makes B correct. A is wrong because although both routes do converge at glucose-6-phosphate, they do not incur the same cost reaching it: the glycogen route arrives already phosphorylated. C is wrong because the phosphofructokinase step is a mandatory, ATP-consuming, rate-limiting reaction downstream of glucose-6-phosphate that glycogenolysis cannot bypass, so 4 net ATP is not attainable."
  },
  {
    "id": "SF2-EX-026",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Bioenergetics",
    "cognitiveLevel": "Analysis",
    "text": "A muscle biopsy taken immediately after a 30-second all-out Wingate test shows a substantial fall in intramuscular ATP, marked accumulation of inosine monophosphate (IMP), and a sharp rise in plasma ammonia. Which explanation best accounts for this combination of findings?",
    "options": [
      {
        "letter": "A",
        "text": "When ATP demand outstrips resynthesis, adenylate kinase (myokinase) converts two ADP into one ATP plus one AMP, and the accumulating AMP is deaminated by AMP deaminase to IMP and ammonia, so IMP and ammonia accumulation mark severe adenine nucleotide degradation"
      },
      {
        "letter": "B",
        "text": "Anaerobic glycolysis regenerates NAD+ by reducing pyruvate to lactate, and the accompanying deamination of pyruvate to alanine releases both ammonia and IMP as byproducts"
      },
      {
        "letter": "C",
        "text": "Rapid oxidation of branched-chain amino acids within the working fiber is the dominant ammonia source during maximal short-duration exercise, and the IMP arises from concurrent purine salvage activity"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The adenylate kinase reaction is a last-resort buffer that sustains ATP when phosphagen and glycolytic flux cannot keep pace, and because it generates AMP, it drives the AMP deaminase reaction that produces IMP and free ammonia; the simultaneous appearance of falling ATP, rising IMP, and rising ammonia is the classic signature of that purine nucleotide cycle activity, which makes A correct. B is wrong because pyruvate is converted to alanine by transamination, which consumes rather than liberates free ammonia, and no step of that pathway produces IMP. C is wrong because branched-chain amino acid oxidation is a meaningful ammonia source in prolonged endurance work rather than in a 30-second maximal effort, and purine salvage consumes IMP to regenerate AMP rather than producing the IMP that accumulates here."
  },
  {
    "id": "SF2-EX-027",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Bioenergetics",
    "cognitiveLevel": "Application",
    "text": "Two rugby forwards, matched for back squat 1RM, 10 m sprint time, and laboratory-estimated muscle buffering capacity, complete 12 maximal 40 m sprints on 30 seconds of passive recovery. Player A maintains sprint times within 3% of his best through all 12 repetitions, whereas Player B decays by more than 10% by repetition 6. Which physiological difference between them best explains this?",
    "options": [
      {
        "letter": "A",
        "text": "Player A has a higher proportion of type IIx fibers, which are better able to resist fatigue during repeated maximal efforts"
      },
      {
        "letter": "B",
        "text": "Player A has substantially larger resting intramuscular phosphocreatine concentrations, which is the principal determinant of resistance to decrement across a repeated-sprint series"
      },
      {
        "letter": "C",
        "text": "Player A has the greater aerobic capacity; phosphocreatine resynthesis during recovery is an entirely oxidative process, so faster oxidative recovery restores phosphocreatine more completely in each 30-second rest period"
      }
    ],
    "correctAnswer": "C",
    "explanation": "With short maximal efforts and incomplete recovery, and with buffering capacity controlled by the stem, the rate-limiting factor across the series is how much phosphocreatine can be resynthesized in each rest interval; phosphocreatine resynthesis is fueled entirely by oxidative phosphorylation, so the athlete with the greater aerobic capacity restores more phosphagen per rest period and shows a smaller decrement, which makes C correct. A is wrong because type IIx fibers have the lowest oxidative capacity and fatigue fastest, so a higher type IIx proportion would predict greater, not smaller, decrement. B is wrong because resting phosphocreatine concentrations differ little between trained athletes and are not the principal determinant of repeated-sprint decrement; the resynthesis rate between efforts, not the starting store, distinguishes performers."
  },
  {
    "id": "SF2-EX-028",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Bioenergetics",
    "cognitiveLevel": "Analysis",
    "text": "During a graded treadmill test with metabolic cart analysis, a runner's respiratory exchange ratio (RER) is 0.88 at stage 4 and rises to 1.12 at stage 8. The coach objects that the data must be faulty, reasoning that an athlete cannot derive more than 100% of energy from carbohydrate. Which interpretation is most accurate?",
    "options": [
      {
        "letter": "A",
        "text": "The coach is correct that the value is invalid; RER cannot physiologically exceed 1.00, so a reading of 1.12 indicates gas analyzer calibration drift or a leak in the sampling system"
      },
      {
        "letter": "B",
        "text": "Above the lactate and ventilatory threshold, bicarbonate buffering of accumulating acid liberates non-metabolic carbon dioxide and compensatory hyperventilation further raises VCO2 relative to VO2, so RER routinely exceeds 1.00 and simply ceases to be a valid index of substrate use"
      },
      {
        "letter": "C",
        "text": "An RER above 1.00 reflects a shift toward protein as a supplementary fuel, because protein oxidation has a respiratory quotient greater than 1.00"
      }
    ],
    "correctAnswer": "B",
    "explanation": "At the whole-body level, RER measured at the mouth can exceed 1.00 because CO2 output includes carbon dioxide liberated when bicarbonate buffers metabolic acid, plus the additional CO2 blown off during the hyperventilatory respiratory compensation phase; the ratio remains a valid measurement but is no longer interpretable as a substrate-use ratio above about 1.00, which makes B correct. A is wrong because RER values well above 1.00 are a normal and expected finding at high work rates, and an RER of at least 1.10 is in fact a standard secondary criterion for confirming a maximal effort. C is wrong because protein oxidation has a respiratory quotient of roughly 0.82, below that of carbohydrate, so increased protein oxidation would lower rather than raise RER."
  },
  {
    "id": "SF2-EX-029",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Bioenergetics",
    "cognitiveLevel": "Recall",
    "text": "In laboratory testing, the onset of blood lactate accumulation (OBLA) is conventionally identified at a fixed blood lactate concentration of approximately:",
    "options": [
      {
        "letter": "A",
        "text": "2.0 mmol/L"
      },
      {
        "letter": "B",
        "text": "4.0 mmol/L"
      },
      {
        "letter": "C",
        "text": "6.0 mmol/L"
      }
    ],
    "correctAnswer": "B",
    "explanation": "OBLA is defined by convention as the exercise intensity at which blood lactate reaches a fixed concentration of 4.0 mmol/L, which is why B is correct. A is wrong because roughly 2.0 mmol/L corresponds to the first, lower lactate threshold, the initial systematic rise above resting baseline, which occurs at a distinctly lower intensity than OBLA. C is wrong because 6.0 mmol/L lies above the conventional OBLA marker and is not a standard reference concentration for threshold determination."
  },
  {
    "id": "SF2-EX-030",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Bioenergetics",
    "cognitiveLevel": "Analysis",
    "text": "An athlete's oxygen consumption remains roughly 10% above baseline for several hours after a high-volume, multi-joint resistance training session, long after intramuscular phosphagen stores have been fully restored and blood lactate has returned to resting values. Which explanation best accounts for this prolonged, slow component of excess postexercise oxygen consumption (EPOC)?",
    "options": [
      {
        "letter": "A",
        "text": "Persistently elevated core temperature, sustained catecholamine and thyroid hormone activity, elevated ventilatory and cardiac work, and increased protein and substrate turnover, all of which decay over hours"
      },
      {
        "letter": "B",
        "text": "Continued resynthesis of phosphocreatine and re-saturation of myoglobin and hemoglobin oxygen stores, which proceed unusually slowly after heavy resistance loading"
      },
      {
        "letter": "C",
        "text": "Hepatic reconversion of accumulated lactate to glucose through the Cori cycle, which accounts for the majority of the oxygen consumed in the hours following exercise"
      }
    ],
    "correctAnswer": "A",
    "explanation": "EPOC has a rapid component completed within minutes and a slow component that can persist for hours; the slow component reflects the metabolic cost of an elevated body temperature, lingering sympathetic and thyroid hormone stimulation, elevated cardiorespiratory work, and increased protein and substrate turnover associated with repair and remodeling, which makes A correct. B is wrong because phosphocreatine resynthesis and oxygen store repletion constitute the rapid component and are essentially complete within a few minutes; the stem specifically states these have already normalized. C is wrong because the classic lactate-based oxygen debt explanation has been superseded: only a small fraction of lactate is reconverted to glucose, most is oxidized as fuel, and the stem states blood lactate has already returned to baseline."
  },
  {
    "id": "SF2-EX-031",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Neuroendocrine",
    "cognitiveLevel": "Analysis",
    "text": "Following a resistance training session, an athlete's insulin-stimulated skeletal muscle glucose uptake rises within minutes of a carbohydrate feeding, whereas testosterone-mediated increases in muscle protein synthesis unfold over hours to days. Which explanation best accounts for this difference in latency?",
    "options": [
      {
        "letter": "A",
        "text": "Testosterone circulates largely bound to sex hormone-binding globulin and albumin, and the slow dissociation of hormone from these carrier proteins is the rate-limiting step for its action in muscle"
      },
      {
        "letter": "B",
        "text": "Testosterone must first be converted by 5-alpha-reductase to dihydrotestosterone inside the muscle fiber before it can bind its receptor, and this conversion proceeds slowly in skeletal muscle"
      },
      {
        "letter": "C",
        "text": "Insulin is a polypeptide hormone that binds a membrane receptor and triggers a second-messenger cascade translocating pre-existing GLUT4 vesicles, whereas testosterone is a steroid that binds an intracellular receptor and acts by altering gene transcription, which requires transcription, translation, and new protein accumulation"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The latency difference is fundamentally a difference in signaling class: polypeptide hormones act at the sarcolemma through second messengers on machinery that already exists, so effects appear in seconds to minutes, whereas steroid hormones diffuse through the membrane, bind cytosolic or nuclear receptors, and act genomically, so the functional effect awaits new messenger RNA and new protein, which makes C correct. A is wrong because although the majority of circulating testosterone is protein-bound, dissociation from albumin and sex hormone-binding globulin is rapid and is not the rate-limiting step for androgen action. B is wrong because testosterone binds the androgen receptor directly and skeletal muscle contains comparatively little 5-alpha-reductase, so obligatory conversion to dihydrotestosterone is not a required intermediate step in muscle."
  },
  {
    "id": "SF2-EX-032",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Neuroendocrine",
    "cognitiveLevel": "Application",
    "text": "A wrestler's blood is sampled in the minutes before and at intervals after a championship match. Plasma epinephrine is already several-fold above baseline immediately before the match begins, whereas cortisol does not reach its peak until roughly 20 to 30 minutes after the match ends. Which explanation best accounts for these different time courses?",
    "options": [
      {
        "letter": "A",
        "text": "The adrenal medulla is directly innervated by preganglionic sympathetic neurons and releases pre-stored catecholamines within seconds, whereas cortisol requires the multistep hypothalamic-pituitary-adrenal cascade of CRH release, ACTH release, and de novo adrenal cortical steroid synthesis, which takes many minutes"
      },
      {
        "letter": "B",
        "text": "Epinephrine appears rapidly because it is released directly from sympathetic nerve terminals distributed throughout the body, whereas cortisol must first be transported from the anterior pituitary to its peripheral target tissues"
      },
      {
        "letter": "C",
        "text": "Cortisol is stored in secretory granules within the adrenal cortex, but its appearance in plasma is delayed because peripheral 11-beta-hydroxysteroid dehydrogenase must first convert inactive cortisone into cortisol"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The adrenal medulla functions as a modified sympathetic ganglion, so a neural signal releases vesicle-stored epinephrine essentially instantaneously, including in anticipation of competition, whereas the hypothalamic-pituitary-adrenal axis is a sequential hormonal cascade whose final step is synthesis rather than release of stored product, producing the characteristic 20-to-30-minute delay, which makes A correct. B is wrong on both clauses: sympathetic nerve terminals release norepinephrine rather than epinephrine, and the anterior pituitary secretes ACTH, not cortisol, so nothing is transported from the pituitary to the tissues. C is wrong because steroid hormones are not stored in secretory granules; cortisol is synthesized on demand from cholesterol and is secreted directly by the adrenal cortex, so no peripheral cortisone-to-cortisol conversion step gates its appearance."
  },
  {
    "id": "SF2-EX-033",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Neuroendocrine",
    "cognitiveLevel": "Analysis",
    "text": "A coach restructures a bodybuilder's hypertrophy sessions specifically to maximize the acute postexercise growth hormone spike, cutting rest intervals to 20 seconds and prioritizing metabolic stress, on the reasoning that a larger hormonal spike will produce more hypertrophy. Which critique of this reasoning is most accurate?",
    "options": [
      {
        "letter": "A",
        "text": "The reasoning fails because growth hormone's anabolic effect on skeletal muscle is mediated entirely through hepatic IGF-1, and since circulating IGF-1 does not change acutely after a training session, the growth hormone spike can have no anabolic consequence"
      },
      {
        "letter": "B",
        "text": "Transient postexercise elevations in systemic growth hormone have not been shown to independently drive hypertrophy; mechanical tension, accumulated effective training volume, and local intracellular signaling and androgen receptor content are the primary determinants, and the very short rest intervals may actually reduce the volume-load the athlete can complete"
      },
      {
        "letter": "C",
        "text": "The reasoning fails because the growth hormone released during exercise consists predominantly of biologically inactive isoforms, so the measured spike reflects assay cross-reactivity rather than any genuine hormonal signal"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Studies that dissociate the acute hormonal response from the training stimulus consistently find that transient systemic growth hormone and testosterone excursions do not predict hypertrophy independently, whereas mechanical tension and the total effective volume performed at sufficient proximity to failure do, so optimizing the session for a hormone spike at the expense of volume-load is counterproductive, which makes B correct. A is wrong because it overstates the mechanism: growth hormone has direct effects on target tissues in addition to hepatic IGF-1-mediated effects, and locally expressed muscle IGF-1 splice variants do respond to loading, so the claim that its action is mediated entirely through unchanged circulating IGF-1 is false. C is wrong because exercise elevates multiple growth hormone isoforms, including bioactive ones, so the spike is a genuine physiological signal; the flaw in the coach's logic is the assumed causal link to hypertrophy, not the authenticity of the measurement."
  },
  {
    "id": "SF2-EX-034",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Neuroendocrine",
    "cognitiveLevel": "Analysis",
    "text": "A 19-year-old female gymnast has held her training volume constant for the past year but has progressively restricted her dietary intake over the last eight months. She now reports no menstrual period for six months and has just been diagnosed with a second metatarsal stress fracture. Which sequence best explains the physiological link between her dietary intake and her bone injury?",
    "options": [
      {
        "letter": "A",
        "text": "Chronic training stress elevates circulating cortisol, and cortisol directly suppresses osteoblast activity; this is the principal mechanism of her bone loss and operates independently of her menstrual status"
      },
      {
        "letter": "B",
        "text": "Repetitive high-impact landings exceed bone's minimal essential strain so frequently that microdamage accumulates faster than remodeling can repair it; the amenorrhea is a coincidental finding unrelated to the fracture"
      },
      {
        "letter": "C",
        "text": "Low energy availability reduces hypothalamic GnRH pulse frequency, which lowers LH and FSH secretion and therefore circulating estrogen; hypoestrogenism removes estrogen's restraint on osteoclastic resorption, reducing bone mineral density and raising stress fracture risk"
      }
    ],
    "correctAnswer": "C",
    "explanation": "This is the classic female athlete triad or relative energy deficiency in sport pathway: insufficient energy availability suppresses hypothalamic GnRH pulsatility, producing functional hypothalamic amenorrhea, and the resulting hypoestrogenic state accelerates osteoclastic bone resorption, so C correctly links intake, menstrual dysfunction, and bone fragility as a single causal chain. A is wrong because although glucocorticoid excess does suppress osteoblast function and contributes at the margin, it is not the principal mechanism here, and the claim that the process is independent of menstrual status contradicts the central role of hypoestrogenism. B is wrong because dismissing six months of secondary amenorrhea as coincidental ignores the strongest predictor in the case; mechanical microdamage accumulation is real but does not explain why this athlete fractures at an unchanged training load that she previously tolerated."
  },
  {
    "id": "SF2-EX-035",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Neuroendocrine",
    "cognitiveLevel": "Application",
    "text": "A monitoring program flags two endurance athletes. Athlete 1, early in a block emphasizing high-intensity anaerobic work, shows elevated resting heart rate and blood pressure, restlessness, and disturbed sleep. Athlete 2, a marathoner late in a very high-volume aerobic block, shows an unusually low resting heart rate, early fatigue in every session, a blunted maximal heart rate and blunted catecholamine response during a maximal test, and depressed mood. Which interpretation is most accurate?",
    "options": [
      {
        "letter": "A",
        "text": "Athlete 1 displays the sympathetic pattern of overreaching typically associated with high-intensity anaerobic overload, while Athlete 2 displays the parasympathetic pattern associated with chronic high-volume aerobic overtraining, which is generally the more advanced presentation and the slower to resolve"
      },
      {
        "letter": "B",
        "text": "Both presentations reflect the same degree of hypothalamic-pituitary suppression, and the opposite resting heart rates merely reflect Athlete 2's greater aerobic training age, carrying no diagnostic significance"
      },
      {
        "letter": "C",
        "text": "Athlete 2's low resting heart rate and blunted maximal heart rate indicate successful aerobic adaptation and taper readiness, so only Athlete 1 meets the criteria for excessive training stress"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Excessive training stress presents in two recognized autonomic patterns: a sympathetic form, more common with anaerobic or high-intensity overload and marked by elevated resting heart rate and blood pressure, restlessness, and sleep disturbance, and a parasympathetic form, more common with chronic high-volume aerobic overload and marked by low resting heart rate, blunted maximal heart rate, a suppressed catecholamine response, and mood disturbance, with the parasympathetic form generally reflecting a more advanced state, which makes A correct. B is wrong because the divergent resting heart rates are precisely what distinguishes the two syndromes and are diagnostically meaningful rather than an artifact of training age. C is wrong because a blunted maximal heart rate coupled with a blunted catecholamine response, early session fatigue, and depressed mood is the signature of parasympathetic overtraining, not of a well-executed taper, in which performance and mood improve rather than deteriorate."
  },
  {
    "id": "SF2-EX-036",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Cardiopulmonary",
    "cognitiveLevel": "Application",
    "text": "In a laboratory test, a 70 kg competitive cyclist achieves a maximal cardiac output of 28 L/min and a maximal arteriovenous oxygen difference of 15 mL O2 per 100 mL of blood. Using the Fick equation, his relative VO2max is approximately:",
    "options": [
      {
        "letter": "A",
        "text": "40 mL/kg/min"
      },
      {
        "letter": "B",
        "text": "60 mL/kg/min"
      },
      {
        "letter": "C",
        "text": "75 mL/kg/min"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The Fick equation states that VO2 equals cardiac output multiplied by the arteriovenous oxygen difference; 15 mL O2 per 100 mL of blood equals 150 mL O2 per liter of blood, so 28 L/min multiplied by 150 mL/L yields 4,200 mL/min, and dividing by 70 kg gives 60 mL/kg/min, making B correct. A is wrong because 40 mL/kg/min corresponds to an arteriovenous oxygen difference of only about 10 mL per 100 mL at this cardiac output, which understates the extraction reported. C is wrong because 75 mL/kg/min would require a maximal cardiac output of about 35 L/min at the stated extraction, well above the 28 L/min measured."
  },
  {
    "id": "SF2-EX-037",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Cardiopulmonary",
    "cognitiveLevel": "Analysis",
    "text": "During an incremental cycle test with breath-by-breath gas analysis, a rower's ventilatory equivalent for oxygen (VE/VO2) begins to rise at about 62% of VO2peak while the ventilatory equivalent for carbon dioxide (VE/VCO2) stays flat; at about 85% of VO2peak, VE/VCO2 also begins to rise. Which interpretation of these two breakpoints is most accurate?",
    "options": [
      {
        "letter": "A",
        "text": "The first breakpoint is the respiratory compensation point, or second ventilatory threshold, and the second breakpoint marks attainment of the athlete's true VO2max"
      },
      {
        "letter": "B",
        "text": "The first breakpoint marks the onset of respiratory muscle fatigue, and the second marks the intensity at which fat oxidation ceases entirely"
      },
      {
        "letter": "C",
        "text": "The first breakpoint is the first ventilatory threshold, where buffering of accumulating acid liberates extra carbon dioxide so that ventilation rises out of proportion to VO2 but still in proportion to VCO2; the second is the respiratory compensation point, where hyperventilation driven by developing metabolic acidosis raises ventilation out of proportion to VCO2 as well"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The two-threshold pattern is identified precisely by this dissociation: at the first ventilatory threshold, bicarbonate buffering adds non-metabolic CO2 so VE and VCO2 rise together while VE/VO2 climbs and VE/VCO2 does not, and at the respiratory compensation point, uncompensated acidosis drives ventilation beyond even the CO2 output, so both equivalents rise, which makes C correct. A is wrong because it mislabels the sequence: an isolated rise in VE/VO2 with a flat VE/VCO2 is by definition the first threshold, not the respiratory compensation point, and a second breakpoint at 85% of VO2peak occurs below rather than at VO2max. B is wrong because respiratory muscle fatigue does not produce a discrete ventilatory equivalent breakpoint at a submaximal intensity, and fat oxidation declines progressively toward high intensities rather than ceasing abruptly at an identifiable threshold."
  },
  {
    "id": "SF2-EX-038",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Cardiopulmonary",
    "cognitiveLevel": "Analysis",
    "text": "In working skeletal muscle during high-intensity exercise, local temperature rises, PCO2 rises, and pH falls, shifting the oxyhemoglobin dissociation curve to the right. Which statement best describes the principal functional consequence of this shift and why arterial oxygen saturation nonetheless remains near normal?",
    "options": [
      {
        "letter": "A",
        "text": "The rightward shift lowers hemoglobin's affinity for oxygen, enhancing unloading at the tissue for any given PO2; because the upper portion of the dissociation curve is relatively flat, loading at the high alveolar PO2 in the lung is affected only minimally, so arterial saturation remains near normal"
      },
      {
        "letter": "B",
        "text": "The rightward shift raises hemoglobin's affinity for oxygen, so more oxygen is bound in the lung; unloading at the tissue is unaffected because tissue PO2 is already near zero, and arterial saturation therefore rises slightly above resting values"
      },
      {
        "letter": "C",
        "text": "The rightward shift mainly increases the quantity of oxygen dissolved in plasma rather than altering hemoglobin binding, and because dissolved oxygen contributes little to measured saturation, arterial saturation appears unchanged"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The Bohr effect and the temperature effect together reduce hemoglobin's oxygen affinity in the metabolically active tissue, increasing the fraction of oxygen released at the steep, low-PO2 portion of the curve where the muscle operates; because the curve plateaus at the high PO2 of the pulmonary capillary, the same shift barely reduces arterial loading, which is why extraction improves without a meaningful fall in arterial saturation, making A correct. B is wrong because it reverses the direction of the affinity change, since a rightward shift decreases affinity, and because tissue PO2 during exercise is low but not zero. C is wrong because the shift is a change in hemoglobin binding affinity, not in plasma solubility, which is governed by Henry's law and is unaffected by pH, temperature, or 2,3-DPG."
  },
  {
    "id": "SF2-EX-039",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Cardiopulmonary",
    "cognitiveLevel": "Analysis",
    "text": "A well-trained 24-year-old male rower tested at sea level reports that breathing feels like the limiting factor at VO2max. Testing shows arterial oxygen saturation of 96% at maximal effort and a maximal voluntary ventilation substantially higher than the ventilation he actually reached at VO2max. Which statement best characterizes the limitation to his VO2max?",
    "options": [
      {
        "letter": "A",
        "text": "Pulmonary diffusion across the alveolar-capillary membrane is limiting, because any arterial saturation below 98% at maximal exercise constitutes exercise-induced arterial hypoxemia"
      },
      {
        "letter": "B",
        "text": "Central oxygen delivery, specifically maximal cardiac output and the resulting convective oxygen transport, is the primary limiter in healthy individuals at sea level; his preserved ventilatory reserve and maintained saturation show the pulmonary system is not limiting, and his sense of breathlessness reflects the ventilatory drive generated by metabolic acidosis"
      },
      {
        "letter": "C",
        "text": "Peripheral factors, specifically mitochondrial density and capillarization in the locomotor muscles, are the primary limiter in trained athletes, because maximal cardiac output plateaus well below the muscle's capacity to extract oxygen"
      }
    ],
    "correctAnswer": "B",
    "explanation": "In healthy individuals exercising at sea level, the pulmonary system is overbuilt relative to demand: ventilatory reserve remains at maximal exercise and arterial saturation is defended, so VO2max is set by the heart's ability to deliver oxygenated blood, which is why B is correct and why the perceived breathlessness is a consequence of the ventilatory response to acidosis rather than evidence of a pulmonary ceiling. A is wrong because it invents a threshold: exercise-induced arterial hypoxemia is conventionally identified at saturations at or below roughly 93% to 95% or a drop of about 4% or more from rest, so 96% is within the normal range. C is wrong because it inverts the relationship: the muscle's extraction capacity generally exceeds what the central circulation can deliver, so oxygen supply rather than peripheral oxidative machinery is the binding constraint, even though peripheral adaptations do contribute."
  },
  {
    "id": "SF2-EX-040",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Cardiopulmonary",
    "cognitiveLevel": "Application",
    "text": "During a graded maximal exercise test on a healthy 26-year-old field hockey player, systolic blood pressure rises progressively from 124 to 186 mmHg across successive stages, then reads 168 mmHg at the next higher workload while she continues exercising; diastolic blood pressure has remained between 76 and 80 mmHg throughout. Which finding warrants terminating the test?",
    "options": [
      {
        "letter": "A",
        "text": "The diastolic pressure remaining essentially unchanged from rest, which indicates a failure of appropriate vasodilation in the working musculature"
      },
      {
        "letter": "B",
        "text": "The systolic pressure exceeding 180 mmHg, which is the accepted upper limit for continuing a maximal graded exercise test in a healthy athlete"
      },
      {
        "letter": "C",
        "text": "The fall in systolic pressure of roughly 18 mmHg despite an increase in work rate, which suggests the heart is unable to maintain output against the rising demand"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Systolic pressure should rise progressively with work rate during a graded test, and a sustained drop of 10 mmHg or more below the previous stage in the face of an increased workload is a recognized indication to stop the test, because it suggests the left ventricle can no longer meet the demand; C is therefore correct. A is wrong because diastolic pressure normally remains unchanged or falls slightly during dynamic exercise as peripheral resistance drops, so an essentially flat diastolic reading is the expected, healthy response rather than a warning sign. B is wrong because the threshold is far too low: healthy trained athletes routinely exceed 180 and often 200 mmHg systolic at maximal effort, and conventional absolute termination criteria sit near 250 mmHg systolic or 115 mmHg diastolic."
  },
  {
    "id": "SF2-EX-041",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Cardiopulmonary",
    "cognitiveLevel": "Application",
    "text": "A triathlete rides for 90 minutes at a constant 200 W in 32 degrees C heat. Her heart rate climbs steadily from 142 to 166 beats per minute over the session, while power output, cadence, and measured VO2 remain essentially unchanged. Which explanation best accounts for this pattern?",
    "options": [
      {
        "letter": "A",
        "text": "Cardiovascular drift: progressive plasma volume loss through sweating and redistribution of blood to the cutaneous circulation for heat dissipation reduce venous return and therefore stroke volume, so heart rate must rise to defend a roughly constant cardiac output at an unchanged oxygen demand"
      },
      {
        "letter": "B",
        "text": "A progressive rightward shift of the oxyhemoglobin dissociation curve impairs arterial oxygen loading in the lung, so cardiac output must rise to deliver the same amount of oxygen; the rising heart rate therefore reflects a genuinely increasing cardiac output"
      },
      {
        "letter": "C",
        "text": "Progressive glycogen depletion forces recruitment of additional type II motor units to sustain the same power output, raising the metabolic cost of the work, so the rising heart rate simply tracks a rising oxygen consumption"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Cardiovascular drift is the hallmark response to prolonged constant-load exercise, particularly in the heat: sweat-driven plasma volume loss combined with cutaneous vasodilation lowers central venous pressure and end-diastolic filling, reducing stroke volume, and heart rate rises reciprocally so that cardiac output and thus oxygen delivery remain roughly constant, which is exactly the pattern described and makes A correct. B is wrong because the rightward shift produced by heat and acidosis has minimal effect on pulmonary loading, given the flat upper portion of the dissociation curve, and cardiac output during drift is maintained rather than increased. C is wrong because it is directly contradicted by the stem: measured VO2 is unchanged, so no rise in metabolic cost occurred, and the heart rate increase cannot be tracking an oxygen consumption that did not change."
  },
  {
    "id": "SF2-EX-042",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Physiological Adaptations",
    "cognitiveLevel": "Analysis",
    "text": "A collegiate rowing squad completes 10 weeks of concurrent training in which each session pairs heavy lower-body resistance work with 60 minutes of continuous cycling performed immediately afterward. At the end of the block, VO2max has improved to the same degree as in an endurance-only comparison group, but quadriceps cross-sectional area has increased substantially less than in a resistance-only comparison group. Which molecular explanation for this dissociation is best supported by current evidence?",
    "options": [
      {
        "letter": "A",
        "text": "The endurance stimulus upregulates myostatin expression and suppresses satellite cell proliferation, and this is the principal cause of the interference effect"
      },
      {
        "letter": "B",
        "text": "The endurance bout depletes intramuscular phosphocreatine, and low phosphagen availability prevents myofibrillar protein synthesis from being initiated"
      },
      {
        "letter": "C",
        "text": "Elevated AMPK signaling driven by the endurance stimulus can attenuate mTORC1-mediated translation initiation, blunting the anabolic response to the resistance stimulus"
      }
    ],
    "correctAnswer": "C",
    "explanation": "C is correct: the best-supported molecular account of the interference effect is that the energy-sensing AMPK pathway, activated by prolonged aerobic work, opposes mTORC1 signaling and the translation-initiation cascade that drives myofibrillar protein accretion, so hypertrophy is blunted while aerobic adaptations proceed normally. A is wrong because myostatin and satellite cell responses are not the established primary driver of interference; myostatin is generally suppressed rather than elevated by exercise, and satellite cell activity is not the limiting step in this scenario. B is wrong because phosphocreatine is resynthesized within minutes of exercise cessation and phosphagen availability does not gate the protein synthetic response, which is elevated for many hours after training."
  },
  {
    "id": "SF2-EX-043",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Physiological Adaptations",
    "cognitiveLevel": "Analysis",
    "text": "A well-trained 400 m sprinter is immobilized for 5 weeks after a hand fracture and performs no training. On return, 1RM back squat has fallen roughly 7%, while VO2max has fallen roughly 14% and time to exhaustion at a fixed submaximal running velocity has fallen far more than either. Which interpretation of this pattern is most defensible?",
    "options": [
      {
        "letter": "A",
        "text": "1RM testing is simply less sensitive to detraining than aerobic testing, so the true losses in strength and aerobic capacity were in fact comparable"
      },
      {
        "letter": "B",
        "text": "Maximal strength is retained comparatively well across short layoffs because neural adaptations and myofibrillar protein are lost more slowly than the mitochondrial, oxidative enzyme, capillary, and plasma volume adaptations that support aerobic performance"
      },
      {
        "letter": "C",
        "text": "Muscle cross-sectional area is essentially preserved across 5 weeks of inactivity, so the measured strength decrement must reflect reduced motivation during retesting rather than a physiological change"
      }
    ],
    "correctAnswer": "B",
    "explanation": "B is correct: the classic detraining hierarchy is that oxidative and hematological adaptations regress quickly, often measurably within one to two weeks, whereas maximal strength decays comparatively slowly over the first several weeks because neural adaptations and contractile protein persist longer; submaximal endurance performance degrades fastest of all because it depends on the very adaptations that reverse first. A is wrong because a 1RM is a highly reliable and sensitive measure of maximal strength, so the differential decrement reflects real physiology, not instrument insensitivity. C is wrong because measurable atrophy does occur over several weeks of complete inactivity, and attributing the loss to motivation ignores well-documented structural and neural regression."
  },
  {
    "id": "SF2-EX-044",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Physiological Adaptations",
    "cognitiveLevel": "Analysis",
    "text": "A nationally ranked 10,000 m runner completes an 8-week block emphasizing threshold work. Laboratory retesting shows VO2max essentially unchanged, but the running velocity at lactate threshold has risen from 72% to 82% of VO2max, and 10 km time-trial performance has improved by about 6%. Which conclusion is best supported?",
    "options": [
      {
        "letter": "A",
        "text": "Peripheral adaptations such as increased mitochondrial and capillary density and improved lactate clearance raised the fraction of VO2max the athlete can sustain, which improves performance without requiring any change in maximal oxygen uptake"
      },
      {
        "letter": "B",
        "text": "The unchanged VO2max indicates a testing error, because a 6% improvement in time-trial performance is not physiologically possible unless maximal oxygen uptake also increased"
      },
      {
        "letter": "C",
        "text": "The higher threshold reflects greater reliance on anaerobic glycolysis at any given submaximal velocity, which spares muscle glycogen and thereby delays fatigue"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A is correct: in already highly trained endurance athletes VO2max tends to plateau, and further performance gains come mainly from raising the fractional utilization of VO2max that can be sustained (lactate threshold) plus improved economy, both of which are driven by peripheral adaptations in the trained musculature. B is wrong because lactate threshold and exercise economy are independent performance determinants, and improvements in either can produce large performance changes with a static VO2max, so no measurement error need be invoked. C is wrong because it inverts the physiology: a threshold that occurs at a higher percentage of VO2max means less lactate accumulation and less glycolytic reliance at a given submaximal velocity, not more."
  },
  {
    "id": "SF2-EX-045",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Physiological Adaptations",
    "cognitiveLevel": "Recall",
    "text": "Muscle biopsy data from human training studies consistently show one fiber-type transition following several weeks of training, whether the program is heavy resistance training or aerobic endurance training. Which transition is it?",
    "options": [
      {
        "letter": "A",
        "text": "Conversion of Type I fibers into Type IIa fibers"
      },
      {
        "letter": "B",
        "text": "A shift within the Type II pool, from Type IIx toward Type IIa"
      },
      {
        "letter": "C",
        "text": "Conversion of Type IIa fibers into Type I fibers"
      }
    ],
    "correctAnswer": "B",
    "explanation": "B is correct: the reliably observed human adaptation is a subtype shift within the fast-twitch pool, with Type IIx myosin heavy chain expression decreasing and Type IIa increasing in response to essentially any consistent training stimulus; the reverse shift toward IIx appears with detraining. A is wrong because slow-to-fast conversion of Type I fibers is not observed with normal training and would require an extreme, sustained change in innervation pattern. C is wrong because although endurance training makes Type II fibers more oxidative in their metabolic profile, frank conversion of Type IIa fibers into Type I fibers is not well supported in humans by ordinary training."
  },
  {
    "id": "SF2-EX-046",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Physiological Adaptations",
    "cognitiveLevel": "Application",
    "text": "A rugby forward with no prior downhill running exposure completes a session of repeated downhill bouts and reports severe soreness, a large rise in serum creatine kinase, and a strength deficit lasting several days. Four weeks later he repeats the identical session and experiences markedly less soreness, a far smaller creatine kinase response, and only a trivial strength deficit, even though he did no downhill running in between. What best accounts for the attenuated response?",
    "options": [
      {
        "letter": "A",
        "text": "Increased muscle glycogen storage capacity following the first bout lowered the metabolic cost of the second bout"
      },
      {
        "letter": "B",
        "text": "A sustained elevation in resting testosterone following the first bout accelerated tissue regeneration and eliminated the muscle's susceptibility to damage"
      },
      {
        "letter": "C",
        "text": "The repeated bout effect: neural, mechanical, and cellular adaptations from the first bout, including altered motor unit recruitment, remodeling of the extracellular matrix, and addition of sarcomeres in series, confer protection against subsequent eccentric damage"
      }
    ],
    "correctAnswer": "C",
    "explanation": "C is correct: a single bout of unaccustomed eccentric work produces a protective adaptation lasting weeks, mediated by a combination of neural changes (more even recruitment and distribution of load), mechanical changes (connective tissue and cytoskeletal remodeling, sarcomerogenesis that shifts the length-tension relationship), and cellular changes that limit disruption on re-exposure. A is wrong because exercise-induced muscle damage is a mechanical, not a metabolic-substrate, phenomenon, and glycogen availability does not determine sarcomere disruption or creatine kinase efflux. B is wrong because there is no sustained multi-week elevation of resting testosterone from a single eccentric bout, and the protective effect is muscle-specific and movement-specific rather than systemic and hormonally mediated."
  },
  {
    "id": "SF2-EX-047",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Physiological Adaptations",
    "cognitiveLevel": "Analysis",
    "text": "Two matched groups of resistance-trained men train the elbow flexors for 12 weeks. Group 1 performs arm work immediately after a high-volume leg session, producing large acute postexercise elevations in circulating testosterone and growth hormone; Group 2 performs the identical arm work on a separate day with negligible systemic hormonal elevation. At 12 weeks, elbow flexor cross-sectional area and strength gains do not differ between groups. What is the most defensible interpretation?",
    "options": [
      {
        "letter": "A",
        "text": "The transient postexercise rise in systemic anabolic hormones is a poor predictor of hypertrophy; local factors such as mechanical tension, intramuscular signaling, and androgen receptor content track the adaptation far more closely"
      },
      {
        "letter": "B",
        "text": "The blood samples were almost certainly drawn at the wrong time points, and correctly timed sampling would have revealed the expected relationship between the hormonal surge and hypertrophy"
      },
      {
        "letter": "C",
        "text": "Hypertrophy in Group 1 was genuinely greater but was masked because the added leg work increased intracellular fluid rather than contractile protein in the arms"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A is correct: this design has been run repeatedly, and the consistent finding is a dissociation between acute systemic hormone excursions and long-term hypertrophy, which is why current models emphasize local mechanical tension, intracellular signaling, and receptor-level factors as the proximate drivers of muscle growth. B is wrong because the dissociation is replicated across studies using standard, appropriately timed sampling windows, so the null result is a real biological finding rather than a sampling artifact. C is wrong because it invents an implausible mechanism: extra leg work would not selectively swell the untrained-that-day elbow flexors, and cross-sectional area assessed after 12 weeks in a rested state is not meaningfully confounded by transient fluid shifts."
  },
  {
    "id": "SF2-EX-048",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Integrated Physiology",
    "cognitiveLevel": "Analysis",
    "text": "A national-level triathlete presents after a prolonged high-volume build. Testing shows a reduced maximal heart rate, a reduced peak blood lactate concentration at exhaustion, an unusually low resting heart rate, blunted mood, and a performance decrement that has not resolved after three weeks of markedly reduced training. Which classification best fits this presentation?",
    "options": [
      {
        "letter": "A",
        "text": "Functional overreaching, which by definition resolves within a few days to roughly two weeks of reduced training and is followed by a supercompensatory rebound in performance"
      },
      {
        "letter": "B",
        "text": "The parasympathetic form of overtraining syndrome, characterized by suppressed maximal heart rate and suppressed maximal blood lactate, a low resting heart rate, and a performance decrement persisting for months"
      },
      {
        "letter": "C",
        "text": "Sympathetic overtraining, which predominates in endurance athletes and presents with elevated resting heart rate, restlessness, and elevated maximal blood lactate"
      }
    ],
    "correctAnswer": "B",
    "explanation": "B is correct: the combination of a suppressed maximal heart rate and suppressed peak lactate with a low resting heart rate is the hallmark parasympathetic (or 'addisonic') presentation seen in high-volume endurance athletes, and the defining feature of overtraining syndrome rather than overreaching is that the decrement persists for months despite rest. A is wrong because functional overreaching resolves within days to about two weeks of reduced load and leaves the athlete better off, not worse, which is precisely the criterion this athlete fails. C is wrong on two counts: the sympathetic (or 'basedowian') form is more typical of anaerobic and power athletes, and its signature findings, elevated resting heart rate and elevated maximal lactate, are the opposite of what this athlete shows."
  },
  {
    "id": "SF2-EX-049",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Integrated Physiology",
    "cognitiveLevel": "Analysis",
    "text": "A soccer midfielder runs on a treadmill for 60 minutes at a fixed submaximal speed in 32 degrees C with limited fluid intake. Across the bout, oxygen consumption remains essentially constant, stroke volume declines progressively, and heart rate rises about 15 beats/min. Which explanation of this pattern is correct?",
    "options": [
      {
        "letter": "A",
        "text": "Rising core temperature has increased mitochondrial uncoupling, raising the oxygen cost of the fixed workload and driving heart rate upward"
      },
      {
        "letter": "B",
        "text": "Accumulating blood lactate is stimulating peripheral chemoreceptors, raising heart rate independently of any change in stroke volume"
      },
      {
        "letter": "C",
        "text": "Progressive dehydration and cutaneous vasodilation have reduced central blood volume and ventricular filling, lowering stroke volume, and heart rate rises to defend cardiac output"
      }
    ],
    "correctAnswer": "C",
    "explanation": "C is correct: this is cardiovascular drift, in which plasma volume loss through sweating combines with redistribution of blood to the skin for heat dissipation, reducing venous return and end-diastolic filling; stroke volume falls and heart rate rises compensatorily so that cardiac output and therefore oxygen delivery are maintained, which is exactly why VO2 stays flat. A is wrong because the stem specifies that oxygen consumption did not change, whereas increased mitochondrial uncoupling would by definition raise the oxygen cost of the same external work. B is wrong because it contradicts the observed stroke volume decline, which is the actual driver of the heart rate response, and because at a steady submaximal intensity lactate is not the mediator of drift."
  },
  {
    "id": "SF2-EX-050",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Integrated Physiology",
    "cognitiveLevel": "Application",
    "text": "A middle-distance squad adopts a 4-week 'live high, train low' camp: athletes reside at roughly 2,500 m but descend to near sea level for all quality training sessions. Which statement best captures the primary intended mechanism of this strategy?",
    "options": [
      {
        "letter": "A",
        "text": "Chronic resting hypoxic exposure stimulates erythropoietin release and expands red cell mass, while training near sea level preserves absolute training velocity and oxygen flux at the working muscle"
      },
      {
        "letter": "B",
        "text": "Chronic hypoxia pressure-loads the left ventricle, increasing maximal cardiac output, and this is the main driver of the subsequent sea-level VO2max improvement"
      },
      {
        "letter": "C",
        "text": "The main benefit is an increase in skeletal muscle buffering capacity, which is the primary determinant of the improvement in sea-level VO2max"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A is correct: the rationale of live high, train low is to obtain the hematological benefit of prolonged hypoxic exposure, principally erythropoietin-mediated expansion of red cell mass and oxygen-carrying capacity, while avoiding the training decrement that accompanies training in hypoxia, where reduced arterial oxygen content forces lower absolute workloads. B is wrong because hypoxia raises pulmonary arterial pressure and loads the right ventricle rather than producing a left ventricular adaptation, and maximal cardiac output is not increased by altitude exposure; if anything maximal stroke volume falls at altitude. C is wrong because although modest changes in muscle buffering capacity and other peripheral variables can occur, they are not the primary determinant of the sea-level VO2max response, which tracks the change in total hemoglobin mass."
  },
  {
    "id": "SF2-EX-051",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Integrated Physiology",
    "cognitiveLevel": "Application",
    "text": "A collegiate cross-country runner presents with a chronic energy intake well below her exercise energy expenditure, secondary amenorrhea of 9 months' duration, and a second-metatarsal stress fracture. Which sequence best describes the physiology linking these findings?",
    "options": [
      {
        "letter": "A",
        "text": "The training load itself elevates cortisol, which directly suppresses ovarian estrogen synthesis; energy availability is not causally involved in the menstrual or skeletal findings"
      },
      {
        "letter": "B",
        "text": "Low energy availability suppresses hypothalamic GnRH pulsatility, lowering LH and FSH and therefore estrogen; the resulting hypoestrogenism removes estrogen's restraint on osteoclastic bone resorption and impairs bone mineral density"
      },
      {
        "letter": "C",
        "text": "Body fat falling below a fixed threshold of approximately 12% directly triggers amenorrhea, independent of energy intake relative to exercise energy expenditure"
      }
    ],
    "correctAnswer": "B",
    "explanation": "B is correct: the established causal chain in the female athlete triad and relative energy deficiency in sport begins with low energy availability, which downregulates pulsatile hypothalamic GnRH release, producing hypogonadotropic hypogonadism and low estrogen, and because estrogen restrains osteoclast activity, the hypoestrogenic state accelerates bone resorption and predisposes to stress fracture. A is wrong because exercise per se, when energy intake is adequate, does not produce this syndrome; energy availability rather than training stress or a direct cortisol-to-ovary effect is the demonstrated proximate cause. C is wrong because there is no validated critical body fat percentage that triggers amenorrhea; athletes at similar body composition remain eumenorrheic when energy availability is adequate."
  },
  {
    "id": "SF2-EX-052",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Integrated Physiology",
    "cognitiveLevel": "Recall",
    "text": "A powerlifter performs a maximal back squat using a Valsalva maneuver held through the sticking point. Which description of the immediate intrathoracic and cardiovascular consequences is accurate?",
    "options": [
      {
        "letter": "A",
        "text": "Intra-abdominal pressure rises while intrathoracic pressure falls, augmenting venous return and stroke volume"
      },
      {
        "letter": "B",
        "text": "Intrathoracic pressure rises and augments venous return, while arterial blood pressure falls because of reflex vasodilation"
      },
      {
        "letter": "C",
        "text": "Intrathoracic pressure rises, transiently impeding venous return and reducing stroke volume, while arterial blood pressure spikes sharply"
      }
    ],
    "correctAnswer": "C",
    "explanation": "C is correct: forced expiration against a closed glottis raises both intra-abdominal and intrathoracic pressure; the elevated intrathoracic pressure compresses the great veins, so venous return and stroke volume fall transiently, while the combination of the pressure transmitted to the arterial tree and the intense muscular effort drives a sharp arterial blood pressure spike. A is wrong because intrathoracic pressure rises rather than falls during a Valsalva; a fall in intrathoracic pressure is what occurs during normal inspiration. B is wrong on both clauses: elevated intrathoracic pressure impedes rather than augments venous return, and arterial pressure rises steeply rather than falling."
  },
  {
    "id": "SF2-EX-053",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Research & Statistics",
    "cognitiveLevel": "Analysis",
    "text": "A 12-week randomized trial in 240 trained athletes compares Program A with Program B for 1RM bench press. Program A produces a greater mean improvement, and the between-group difference is statistically significant (p = 0.03). The between-group difference is 1.5 kg, with a standardized effect size (Cohen's d) of 0.12. Which interpretation is most defensible for a practitioner?",
    "options": [
      {
        "letter": "A",
        "text": "The effect size is trivial, so the difference is unlikely to be practically meaningful; the large sample simply gave the study enough precision to make a very small difference statistically detectable"
      },
      {
        "letter": "B",
        "text": "A p-value of 0.03 obtained in a large sample establishes that Program A is meaningfully superior for most athletes"
      },
      {
        "letter": "C",
        "text": "A Cohen's d of 0.12 represents a moderate effect that has been underestimated, because large samples systematically shrink standardized effect sizes"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A is correct: statistical significance and practical importance are different questions, and because the standard error shrinks as sample size grows, a large study can return p < 0.05 for a difference too small to matter; d = 0.12 falls below the conventional benchmark for even a small effect (about 0.2), so the 1.5 kg difference has little practical claim on programming decisions. B is wrong because it conflates statistical significance with practical significance; p tells you about compatibility with the null hypothesis, not about the magnitude or importance of the effect. C is wrong because d = 0.12 is trivial rather than moderate (roughly 0.2 small, 0.5 moderate, 0.8 large), and because standardized effect size is a ratio of the mean difference to the standard deviation and is not systematically biased downward by a larger sample."
  },
  {
    "id": "SF2-EX-054",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Research & Statistics",
    "cognitiveLevel": "Analysis",
    "text": "A randomized trial of an 8-week plyometric program in volleyball players reports a mean between-group difference in countermovement jump height of 2.1 cm, 95% CI [-0.3, 4.5] cm. Which statement about this result is correct?",
    "options": [
      {
        "letter": "A",
        "text": "Because the interval includes zero, the study has demonstrated that the plyometric program does not improve countermovement jump height"
      },
      {
        "letter": "B",
        "text": "Because the interval includes zero, the difference is not statistically significant at alpha = 0.05, but the data remain compatible with benefits as large as roughly 4.5 cm, so concluding 'no effect' is unsupported"
      },
      {
        "letter": "C",
        "text": "There is a 95% probability that the true mean difference for these specific participants is exactly 2.1 cm"
      }
    ],
    "correctAnswer": "B",
    "explanation": "B is correct: a 95% confidence interval that spans zero corresponds to a non-significant result at alpha = 0.05, but the interval also shows the range of effects the data are compatible with, and here it extends to a clearly meaningful 4.5 cm benefit, so the honest conclusion is that the study is inconclusive rather than negative. A is wrong because absence of evidence is not evidence of absence; a wide interval indicates an imprecise estimate, and equivalence would require an interval narrow enough to exclude all practically meaningful effects. C is wrong because it misstates what a confidence interval means: the interval concerns the population parameter, not the sample point estimate, and the 95% refers to the long-run coverage of the procedure, not to the probability that the true value equals the observed 2.1 cm."
  },
  {
    "id": "SF2-EX-055",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Research & Statistics",
    "cognitiveLevel": "Analysis",
    "text": "A strength coach reports that athletes on his roster who chose to attend optional 6:00 a.m. extra conditioning sessions improved Yo-Yo Intermittent Recovery Test scores over a season substantially more than teammates who did not attend, and concludes that the extra sessions caused the improvement. Which is the most serious threat to that causal conclusion?",
    "options": [
      {
        "letter": "A",
        "text": "Insufficient statistical power, because dividing the roster into unequal group sizes makes the comparison unreliable"
      },
      {
        "letter": "B",
        "text": "Poor test-retest reliability of the Yo-Yo test, which would systematically inflate the improvement recorded in the attending group"
      },
      {
        "letter": "C",
        "text": "Selection bias: because athletes self-selected into the extra sessions, the groups almost certainly differed at baseline in motivation, fitness, sleep, and other training behaviors, so the difference cannot be attributed to the sessions"
      }
    ],
    "correctAnswer": "C",
    "explanation": "C is correct: without random assignment, exposure is confounded with everything that predicted volunteering, so the attending group's superior improvement is equally consistent with those athletes simply being more motivated, better rested, or already improving, which is exactly the confounding that randomization exists to eliminate. A is wrong because low power increases the risk of missing a real effect (a false negative), whereas here a difference was observed; unequal group sizes reduce efficiency but do not license a causal inference or undermine one that is otherwise valid. B is wrong because random measurement error attenuates rather than manufactures group differences, and there is no reason imprecision in the Yo-Yo test would act selectively on one self-selected group."
  },
  {
    "id": "SF2-EX-056",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Research & Statistics",
    "cognitiveLevel": "Application",
    "text": "Two assistant coaches independently score the same set of video-recorded movement screens for the same 30 athletes and arrive at substantially different scores for many athletes. When each coach rescores the same videos a week later, each reproduces his own original scores almost exactly. This pattern indicates a deficiency in which property of the measurement?",
    "options": [
      {
        "letter": "A",
        "text": "Objectivity, also termed interrater reliability"
      },
      {
        "letter": "B",
        "text": "Intrarater test-retest reliability"
      },
      {
        "letter": "C",
        "text": "Construct validity"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A is correct: objectivity, or interrater reliability, is the degree to which different raters applying the same instrument to the same performance produce the same score, and disagreement between two coaches scoring identical footage is exactly a failure of that property. B is wrong because the stem explicitly states that each coach reproduced his own scores on rescoring, which demonstrates good intrarater and test-retest consistency. C is wrong because construct validity asks whether the screen measures the underlying quality it claims to measure, a question that cannot be answered from rater agreement data alone; a test can be perfectly objective and still measure the wrong construct."
  },
  {
    "id": "SF2-EX-057",
    "section": "scientific-foundations",
    "domain": "Exercise Sciences",
    "topic": "Research & Statistics",
    "cognitiveLevel": "Application",
    "text": "A performance director wants the strongest available evidence on whether velocity-based training causes greater 1RM squat gains than percentage-based training in trained athletes. Which study design would provide the strongest basis for that causal claim?",
    "options": [
      {
        "letter": "A",
        "text": "A large prospective cohort study following athletes across two competitive seasons who selected their own loading method"
      },
      {
        "letter": "B",
        "text": "A randomized controlled trial with concealed allocation, an equated-volume active comparator, and intention-to-treat analysis"
      },
      {
        "letter": "C",
        "text": "A meta-analysis pooling cross-sectional comparisons of elite athletes who already use one method or the other"
      }
    ],
    "correctAnswer": "B",
    "explanation": "B is correct: randomization with concealed allocation is what balances known and unknown confounders across groups, an equated-volume comparator isolates the loading-prescription variable rather than total work, and intention-to-treat analysis preserves the randomization against dropout bias, making this the strongest single design for a causal question. A is wrong because self-selected exposure reintroduces confounding, and no amount of sample size or follow-up in an observational cohort fixes the fact that athletes who choose velocity-based training may differ systematically from those who do not. C is wrong because a meta-analysis inherits the limitations of its constituent studies; pooling cross-sectional comparisons of athletes already using each method yields a more precise estimate of an association that still cannot establish causation or rule out reverse causation."
  },
  {
    "id": "SF2-SP-001",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Mental Skills",
    "cognitiveLevel": "Analysis",
    "text": "An elite female gymnast keeps a log across a competitive season. On days when she reports little worry about the meet, even a very aggressive warm-up and a high heart rate leave her beam performance unaffected. On days when she reports high worry, her beam work holds up until arousal passes a certain point and then deteriorates abruptly rather than gradually, and briefly settling herself mid-routine does not restore performance until she is well below her usual pre-routine arousal level. Which model best accounts for this pattern?",
    "options": [
      {
        "letter": "A",
        "text": "The inverted-U hypothesis, because performance declines once arousal exceeds the optimal midpoint"
      },
      {
        "letter": "B",
        "text": "Individual zones of optimal functioning (IZOF), because each athlete has a personal arousal bandwidth in which performance is best"
      },
      {
        "letter": "C",
        "text": "Catastrophe theory, because cognitive anxiety moderates the arousal-performance relationship, producing an abrupt drop and requiring arousal to fall well below the drop-off point before performance recovers"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Catastrophe theory predicts exactly this interaction: when cognitive anxiety is low, increasing physiological arousal has little detrimental effect, but when cognitive anxiety is high, performance collapses suddenly once arousal crosses a threshold, and the hysteresis effect means arousal must drop substantially below that threshold before performance returns. Option A is wrong because the inverted-U predicts a smooth, symmetrical decline and recovery with no role for cognitive anxiety and no hysteresis. Option B is wrong because IZOF describes an individualized optimal arousal band but does not explain why the same arousal level is harmless on low-worry days and catastrophic on high-worry days, nor the delayed recovery."
  },
  {
    "id": "SF2-SP-002",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Mental Skills",
    "cognitiveLevel": "Application",
    "text": "A national-level male judoka executes his gripping sequences and throws flawlessly in randori and in small regional events, but at national tournaments he rushes his grips, abandons his game plan, and describes feeling \"not in control of myself out there.\" His technical execution in practice is not in question. Which type of imagery should the CSCS prioritize in his pre-competition routine?",
    "options": [
      {
        "letter": "A",
        "text": "Motivational general-mastery imagery, rehearsing himself staying composed, confident, and in control while executing his plan under tournament pressure"
      },
      {
        "letter": "B",
        "text": "Cognitive specific imagery, rehearsing the precise mechanics of his primary throw repeatedly before each match"
      },
      {
        "letter": "C",
        "text": "Motivational specific imagery, rehearsing standing on the podium and receiving the national title"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Motivational general-mastery imagery targets self-efficacy, composure, and perceived control under pressure, which is precisely the deficit in this athlete, whose technical skill is already sound. Option B is wrong because cognitive specific imagery rehearses skill mechanics, which are not the limiting factor here and may increase conscious control of an already automated skill. Option C is wrong because motivational specific imagery targets goal-directed arousal and motivation toward an outcome, which can heighten outcome focus and worsen the loss of composure rather than address it."
  },
  {
    "id": "SF2-SP-003",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Mental Skills",
    "cognitiveLevel": "Application",
    "text": "A collegiate female swimmer has historically raced worse at conference meets than her practice times predict. During taper week her coach wants to give her a competition goal that is entirely within her own control and that directs her attention to execution while the race is actually happening. Which goal best meets both criteria?",
    "options": [
      {
        "letter": "A",
        "text": "Finish in the top three in the conference final"
      },
      {
        "letter": "B",
        "text": "Hold the planned stroke rate through the third 25 and maintain a two-beat kick through the final 15 m"
      },
      {
        "letter": "C",
        "text": "Swim under 52.00 seconds, a time she has bettered in practice"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Option B is a process goal: it specifies controllable execution behaviors and gives the athlete something to attend to moment-to-moment during the race, which is the intended function here. Option A is an outcome goal that depends on other competitors' performances and is therefore not within her control. Option C is a performance goal, which is self-referenced and better than an outcome goal, but a finishing time is a product of the race rather than an executable action, so it does not direct attention to execution during the swim and can still fuel evaluative worry."
  },
  {
    "id": "SF2-SP-004",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Mental Skills",
    "cognitiveLevel": "Application",
    "text": "A collegiate javelin thrower tells her CSCS that before competition her heart rate, breathing, and muscle tension feel essentially the same as they do in training, but she cannot stop replaying a mental scene in which she fouls all three throws and loses her scholarship. Applying the matching hypothesis of arousal regulation, which intervention should be selected?",
    "options": [
      {
        "letter": "A",
        "text": "Progressive muscular relaxation performed in the hour before her warm-up"
      },
      {
        "letter": "B",
        "text": "EMG biofeedback training aimed at lowering resting trapezius and forearm tension"
      },
      {
        "letter": "C",
        "text": "Cognitive restructuring of the catastrophic thought paired with mastery imagery of a well-executed approach and release"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The matching hypothesis holds that the intervention should match the predominant anxiety modality; this athlete's presentation is almost purely cognitive (intrusive catastrophic thoughts with normal somatic sensations), so a cognitive intervention such as restructuring plus mastery imagery is indicated. Option A is a somatic technique aimed at muscular tension she does not report. Option B is likewise a somatic, physiologically targeted intervention, and lowering already-normal muscle tension would not address the worry driving her impairment."
  },
  {
    "id": "SF2-SP-005",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Mental Skills",
    "cognitiveLevel": "Recall",
    "text": "Multidimensional anxiety theory makes distinct predictions about how each component of competitive anxiety relates to performance. Which set of predictions is correct?",
    "options": [
      {
        "letter": "A",
        "text": "Cognitive anxiety shows an inverted-U relationship with performance, while somatic anxiety shows a negative linear relationship"
      },
      {
        "letter": "B",
        "text": "Cognitive anxiety shows a negative linear relationship with performance, while somatic anxiety shows an inverted-U relationship"
      },
      {
        "letter": "C",
        "text": "Both cognitive and somatic anxiety show inverted-U relationships, and self-confidence is unrelated to performance"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Multidimensional anxiety theory proposes that cognitive anxiety (worry) is negatively and roughly linearly related to performance, that somatic anxiety follows an inverted-U so that moderate physiological activation is optimal, and that self-confidence is positively related to performance. Option A reverses the two relationships. Option C both assigns the wrong function to cognitive anxiety and incorrectly claims self-confidence has no relationship with performance."
  },
  {
    "id": "SF2-SP-006",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Motivational Theories",
    "cognitiveLevel": "Analysis",
    "text": "A collegiate strength coach inherits a squad that voluntarily arrives early for extra technique work and reports genuinely enjoying training. He institutes a $100 cash bonus for each new 1RM personal record, with strict verification and a posted checklist of required numbers. Within two months the voluntary extra sessions have stopped, and athletes describe lifting as \"just part of the job.\" Which explanation is most consistent with cognitive evaluation theory?",
    "options": [
      {
        "letter": "A",
        "text": "The controlling functional significance of the contingent reward shifted the perceived locus of causality from internal to external, undermining the athletes' pre-existing intrinsic motivation"
      },
      {
        "letter": "B",
        "text": "The informational function of the reward increased perceived competence and should have raised intrinsic motivation, so the decline must reflect an unrelated loss of relatedness within the squad"
      },
      {
        "letter": "C",
        "text": "The bonus was too small to function as an effective reinforcer, so effort simply reverted toward its unreinforced baseline"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Cognitive evaluation theory holds that extrinsic rewards carry both controlling and informational aspects; a tightly contingent, closely monitored reward is experienced as controlling, shifts perceived locus of causality externally, thwarts autonomy, and undermines existing intrinsic motivation, which is the overjustification pattern described. Option B misapplies the informational aspect: this reward was administered in a controlling manner, and inventing an unrelated relatedness explanation ignores the obvious temporal link to the bonus. Option C is a reinforcement-magnitude argument that cannot explain why voluntary behavior fell below its original, unrewarded level rather than merely returning to it."
  },
  {
    "id": "SF2-SP-007",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Motivational Theories",
    "cognitiveLevel": "Application",
    "text": "A junior hockey player tells his CSCS that he completes his prescribed hip mobility work every night even though he finds it tedious and does not believe it does much for him, \"because I'd feel like a bad teammate and I'd be ashamed of myself if I skipped it.\" Within the organismic integration continuum of self-determination theory, this regulation is best classified as:",
    "options": [
      {
        "letter": "A",
        "text": "Identified regulation"
      },
      {
        "letter": "B",
        "text": "External regulation"
      },
      {
        "letter": "C",
        "text": "Introjected regulation"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Introjected regulation is behavior driven by internal pressures such as guilt, shame, or contingent self-worth, which is exactly what this athlete describes; the pressure has been taken inside but not accepted as personally valued. Option A is wrong because identified regulation requires the athlete to consciously value the activity's outcome, and he explicitly states he does not believe it helps him. Option B is wrong because external regulation depends on externally administered rewards or punishments, whereas no coach surveillance, sanction, or incentive is present in his stated reason."
  },
  {
    "id": "SF2-SP-008",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Motivational Theories",
    "cognitiveLevel": "Analysis",
    "text": "After a disappointing 5000 m race, a collegiate distance runner tells her coach, \"I just don't have the talent for this distance; that's never going to change.\" The coaching staff wants to use attribution retraining to reduce her risk of developing learned helplessness. Toward which attribution should they redirect her?",
    "options": [
      {
        "letter": "A",
        "text": "The unusually strong field and the crowded early pace, external factors that varied on the day and were not her fault"
      },
      {
        "letter": "B",
        "text": "Her pacing decisions through the third kilometer, an internal factor that is unstable across races and under her control"
      },
      {
        "letter": "C",
        "text": "The opponent's superior natural ability, a stable external factor that protects her self-esteem after a loss"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Learned helplessness arises when failure is attributed to internal, stable, uncontrollable causes such as fixed ability; retraining should redirect the athlete to internal, unstable, controllable causes such as tactical or effort-related decisions, which preserve expectancy of future success and give her something to change. Option A moves the attribution outside her control entirely, so while it may cushion self-esteem it does nothing to restore perceived controllability or future expectancy. Option C attributes the result to a stable external factor, which similarly implies the outcome will recur regardless of what she does and offers no path to improvement."
  },
  {
    "id": "SF2-SP-009",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Team Dynamics and Cohesion",
    "cognitiveLevel": "Analysis",
    "text": "A men's collegiate rowing eight posts individual ergometer scores among the best in the conference, yet boat speed is consistently slower than those scores predict, and the deficit has widened as the crew has trained together longer. The rowers get along well and report no interpersonal conflict. Which intervention most directly addresses the likely process loss?",
    "options": [
      {
        "letter": "A",
        "text": "Install seat-by-seat force and impulse instrumentation in the boat and review each rower's individual contribution with them after every piece"
      },
      {
        "letter": "B",
        "text": "Schedule weekly crew dinners and social outings to strengthen interpersonal closeness among the rowers"
      },
      {
        "letter": "C",
        "text": "Replace the crew's boat-speed targets with individual ergometer ranking goals so each rower is competing for a clearly measured personal standard"
      }
    ],
    "correctAnswer": "A",
    "explanation": "This is a classic Ringelmann/social loafing pattern: individual effort becomes less identifiable as group size and blending increase, producing motivation losses that grow over time, and the direct remedy is to make each individual's in-boat contribution visible and accountable. Option B targets social cohesion, which is not the presenting problem (the crew reports no interpersonal difficulty) and has a weaker relationship with performance than task cohesion or identifiability. Option C makes effort identifiable only on a different, non-interdependent task and replaces the shared task goal with individual outcome goals, which can further fragment the coordinated effort the boat actually requires."
  },
  {
    "id": "SF2-SP-010",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Team Dynamics and Cohesion",
    "cognitiveLevel": "Application",
    "text": "A high school girls' volleyball team enjoys each other's company and socializes constantly, but in matches players hesitate on balls in seam coverage, several athletes say they are unsure whether they or a teammate are responsible for specific defensive zones, and two players believe they were promised different roles. Which intervention best targets the actual source of the breakdown?",
    "options": [
      {
        "letter": "A",
        "text": "A structured session in which each athlete's specific role responsibilities and how they contribute to the team's shared performance goals are explicitly defined, discussed, and confirmed with each player"
      },
      {
        "letter": "B",
        "text": "A weekend ropes-course retreat and a series of team dinners to build interpersonal closeness and trust"
      },
      {
        "letter": "C",
        "text": "Assigning each athlete an individual statistical target (kills, digs, aces) so that personal accountability for match contribution is unambiguous"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The described problem is role ambiguity and role conflict, which are addressed by clarifying role responsibilities, scope, and their link to shared team objectives so that each player accepts and understands her role. Option B builds social cohesion, which this team already has in abundance and which does not resolve who is responsible for which zone. Option C substitutes individual statistical outcome goals for role clarity, which can encourage stat-chasing and further undermine the interdependent coverage the team is failing to execute."
  },
  {
    "id": "SF2-SP-011",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Mental Health Referral",
    "cognitiveLevel": "Analysis",
    "text": "Midway through a lifting session, a collegiate football player quietly tells his CSCS that he has been having thoughts lately that his family and teammates \"would honestly be better off without me around.\" He denies any specific plan and asks the coach not to tell anyone. He appears withdrawn but is oriented and cooperative. The most appropriate action for the CSCS is to:",
    "options": [
      {
        "letter": "A",
        "text": "Give him the contact information for the campus counseling center, encourage him to call, and check in with him at his next scheduled session"
      },
      {
        "letter": "B",
        "text": "Stay with him, express concern directly, and facilitate same-day contact with a licensed mental health professional or crisis service in accordance with the institution's emergency action and referral protocol, explaining that a disclosure involving his safety cannot be kept confidential"
      },
      {
        "letter": "C",
        "text": "Honor his request for confidentiality, reassure him that these feelings are a common reaction to a demanding season, and monitor his mood closely over the next several sessions"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Passive suicidal ideation is an urgent safety concern that requires immediate, direct action: the athlete should not be left alone, a warm handoff to a licensed mental health professional or crisis service should occur the same day, and institutional protocol must be followed, with the limits of confidentiality explained honestly. Option A treats an active safety disclosure as a routine referral, relying on the athlete to self-initiate contact and allowing a week of unmonitored risk. Option C compounds the danger by promising confidentiality that cannot be maintained when safety is at stake and by normalizing thoughts of being better off dead as ordinary season fatigue, which is both clinically wrong and far outside a CSCS's scope."
  },
  {
    "id": "SF2-SP-012",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Mental Health Referral",
    "cognitiveLevel": "Application",
    "text": "A collegiate softball player's grandmother, who raised her, died 10 days ago. She is tearful in the weight room, says her sleep has been \"off,\" and asks to shorten one session. She is attending class and team activities, her appetite and concentration are near normal, she denies hopelessness or thoughts of self-harm, and she says she expects to feel better with time. The most appropriate action for the CSCS is to:",
    "options": [
      {
        "letter": "A",
        "text": "Refer her immediately to a licensed mental health professional for evaluation of a major depressive episode, given the tearfulness and sleep disturbance"
      },
      {
        "letter": "B",
        "text": "Refer her to the team physician for medical clearance before she is permitted to resume full training"
      },
      {
        "letter": "C",
        "text": "Acknowledge the loss, adjust training load as needed, ensure she knows how to access counseling services if she wants them, and continue to monitor for warning signs that would warrant referral"
      }
    ],
    "correctAnswer": "C",
    "explanation": "This is an acute, time-limited grief reaction at 10 days with preserved functioning and no red flags, so supportive acknowledgment, load adjustment, making resources known, and ongoing monitoring are appropriate and stay within a CSCS's scope without pathologizing a normal response. Option A over-pathologizes normative bereavement; tearfulness and mild sleep disruption this soon after a significant loss do not indicate a depressive episode, and reflexively referring every grieving athlete is not clinically indicated. Option B is wrong because nothing in the presentation suggests a medical problem requiring physician clearance, and withholding training would isolate her from a supportive routine."
  },
  {
    "id": "SF2-SP-013",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Eating Disorders",
    "cognitiveLevel": "Analysis",
    "text": "A 20-year-old male collegiate wrestler discloses to his CSCS that for about four months, several times per week, he has eaten unusually large amounts of food in short periods with a sense of being unable to stop, then induced vomiting and used laxatives afterward. He states he does this year-round, not only during weight-cut weeks. His body mass is within the normal range for his height and he is not underweight between competitions. This presentation is most consistent with:",
    "options": [
      {
        "letter": "A",
        "text": "Anorexia nervosa, binge-eating/purging type"
      },
      {
        "letter": "B",
        "text": "Bulimia nervosa, warranting a private, supportive conversation and referral to a physician and a licensed mental health professional experienced with eating disorders"
      },
      {
        "letter": "C",
        "text": "Sport-typical weight management behavior in a weight-class athlete, warranting education on safe weight-making practices"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Recurrent binge episodes with a sense of loss of control followed by compensatory purging, occurring regularly for months in an athlete of normal body mass, is the characteristic presentation of bulimia nervosa and requires referral to a physician and a qualified mental health professional; the CSCS's role is to raise concern privately and connect him with care, not to diagnose or treat. Option A is wrong because anorexia nervosa, including the binge-eating/purging subtype, requires significantly low body weight relative to what is expected, which this athlete does not have. Option C is wrong because the behavior occurs year-round and independent of weight-cut cycles, involves loss of control and purging, and cannot be dismissed as sport-normative weight making; treating it as an education problem would delay needed medical and psychological care."
  },
  {
    "id": "SF2-SP-014",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Eating Disorders",
    "cognitiveLevel": "Application",
    "text": "A female collegiate cross-country runner has been diagnosed with an eating disorder and is under the active care of a treatment team consisting of a physician, a registered dietitian, and a psychologist. She asks her CSCS privately to write her a daily calorie target and a \"cutting\" program so she can get back to her old racing weight, adding that she does not want her treatment team to know. The most appropriate response is to:",
    "options": [
      {
        "letter": "A",
        "text": "Decline to set calorie targets or a weight-loss program, explain that nutrition prescription and body composition goals belong to her treatment team, and, with appropriate consent, communicate with that team to obtain her training parameters and clearance"
      },
      {
        "letter": "B",
        "text": "Provide a conservative 300 to 500 kcal daily deficit and a modest program, since she is already under professional supervision and a small deficit is unlikely to be harmful"
      },
      {
        "letter": "C",
        "text": "Decline to train her at all until her treatment team formally discharges her from care"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Prescribing calorie targets or weight-loss programming for an athlete with a diagnosed eating disorder is squarely outside the CSCS scope of practice, and the request to conceal it from her treatment team is itself a warning sign; the correct action is to decline the nutrition prescription, redirect it to the treatment team, and coordinate training within the parameters that team sets. Option B is wrong because even a small, well-intentioned energy deficit prescribed behind the treatment team's back can directly reinforce the disorder and constitutes practicing outside scope. Option C is wrong because appropriately supervised, cleared training is often a valuable part of care and abruptly refusing all contact removes a support relationship and can increase her sense of isolation and stigma."
  },
  {
    "id": "SF2-SP-015",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Psychophysiological Alignment",
    "cognitiveLevel": "Analysis",
    "text": "Two 800 m runners are monitored before a championship final. Both show nearly identical pre-race heart rates and both report equally high intensity on the somatic subscale of a competitive anxiety inventory. Runner 1 rates those symptoms as helpful and describes feeling \"switched on\"; Runner 2 rates the identical symptoms as harmful and describes feeling \"about to come apart.\" Runner 1 sets a personal best; Runner 2 fades badly. Which explanation best accounts for the divergence?",
    "options": [
      {
        "letter": "A",
        "text": "Both runners exceeded their optimal arousal point, so the inverted-U predicts impaired performance in both; Runner 1's personal best must reflect superior fitness rather than any psychological factor"
      },
      {
        "letter": "B",
        "text": "Runner 2 must have higher trait anxiety, which makes physiological arousal inherently detrimental regardless of how the athlete interprets it"
      },
      {
        "letter": "C",
        "text": "The directional interpretation of the symptoms differed: Runner 1 appraised her resources as meeting the demands (a challenge state) while Runner 2 appraised demands as exceeding resources (a threat state), and it is this appraisal rather than arousal magnitude that predicts the performance difference"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Contemporary work on the direction of competitive anxiety and on challenge versus threat states shows that equivalent intensities of physiological activation can be facilitative or debilitative depending on the athlete's appraisal of whether personal resources meet situational demands, which is the only variable that actually differed here. Option A is wrong because arousal intensity was matched between the two athletes, so an intensity-only model cannot explain opposite outcomes, and attributing it to fitness ignores the measured psychological difference. Option B is wrong because it treats arousal as inherently harmful and denies the mediating role of interpretation; high trait anxiety raises the likelihood of a threat appraisal but does not make arousal detrimental independent of appraisal."
  },
  {
    "id": "SF2-SP-016",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Psychophysiological Alignment",
    "cognitiveLevel": "Application",
    "text": "A CSCS tracks morning heart rate variability (HRV) and resting heart rate for a collegiate field hockey squad. One athlete's HRV has been suppressed and her resting heart rate elevated for five consecutive mornings. Her training load has been unchanged and well within her normal range, she is afebrile with no other signs of illness, and she reports poor sleep and high stress during final examinations. She is scheduled for a high-intensity repeated-sprint session today. The most appropriate action is to:",
    "options": [
      {
        "letter": "A",
        "text": "Proceed with the scheduled session, because HRV reflects training load specifically and her load has not increased"
      },
      {
        "letter": "B",
        "text": "Reduce the intensity and volume of today's session, address sleep and the academic stressor in her recovery plan, and continue daily monitoring until her markers return toward baseline"
      },
      {
        "letter": "C",
        "text": "Withhold her from training and refer her for cardiac evaluation before she is cleared to resume, given the sustained elevation in resting heart rate"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Autonomic markers such as HRV integrate total stress load, including non-training psychosocial stressors like examinations and sleep loss, so the psychophysiologically aligned response is to reduce the acute training stressor, address the sleep and stress inputs, and keep monitoring. Option A is wrong because it treats HRV as a training-load-specific measure when it reflects cumulative life stress, so an unchanged program does not justify ignoring a five-day suppression. Option C is wrong because she is asymptomatic apart from a modest resting heart rate elevation with an obvious behavioral explanation; a cardiac workup is not indicated by this presentation, and complete withholding overreacts to a finding that calls for load modification, not medical referral."
  },
  {
    "id": "SF2-SP-017",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Competitive Anxiety",
    "cognitiveLevel": "Application",
    "text": "A junior male golfer scores high on a measure of competitive trait anxiety. His coach observes that during casual practice rounds with friends he reports very low anxiety and plays freely, but in ranked tournaments with spectators and a leaderboard his anxiety ratings are extremely high and his putting deteriorates. Which interpretation is most accurate?",
    "options": [
      {
        "letter": "A",
        "text": "High trait anxiety is a predisposition to perceive evaluative competitive situations as threatening, so it predicts elevated state anxiety specifically in situations he appraises as evaluative, not uniformly across all settings"
      },
      {
        "letter": "B",
        "text": "The discrepancy indicates the trait measure is invalid for him, because a genuine trait would produce comparably elevated anxiety in both practice rounds and tournaments"
      },
      {
        "letter": "C",
        "text": "Competitive state anxiety is determined solely by the objective demands of the situation and is independent of an athlete's trait anxiety"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Trait anxiety is a stable disposition to appraise evaluative situations as threatening and to respond with elevated state anxiety; it therefore predicts situation-specific spikes in state anxiety, exactly the practice-versus-tournament pattern observed. Option B misunderstands the trait-state distinction, wrongly requiring a trait to produce constant anxiety irrespective of situational threat. Option C goes to the opposite extreme by denying any dispositional contribution, which cannot explain why this athlete reacts far more strongly to the same tournament conditions than lower-trait-anxiety peers."
  },
  {
    "id": "SF2-SP-018",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Leadership Styles",
    "cognitiveLevel": "Recall",
    "text": "Chelladurai's multidimensional model of leadership distinguishes required, preferred, and actual leader behavior. Which statement correctly describes how these relate to athlete outcomes?",
    "options": [
      {
        "letter": "A",
        "text": "Both performance and satisfaction are maximized when actual leader behavior matches athletes' preferred behavior, regardless of the demands of the situation"
      },
      {
        "letter": "B",
        "text": "Both performance and satisfaction are maximized when actual leader behavior matches the behavior required by the situation, regardless of athlete preferences"
      },
      {
        "letter": "C",
        "text": "Outcomes are optimized when required, preferred, and actual leader behaviors are congruent; congruence between actual and required behavior contributes principally to performance, while congruence between actual and preferred behavior contributes principally to athlete satisfaction"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The model holds that leader behavior is shaped by situational characteristics, leader characteristics, and member characteristics, and that the best outcomes occur when required, preferred, and actual behaviors converge, with the actual-required match driving performance and the actual-preferred match driving satisfaction. Option A ignores situational demands, so a coach could satisfy athletes while failing to deliver the leadership the competitive context requires. Option B ignores member preferences, which is why a technically correct coach can produce adequate performance alongside dissatisfied, disengaged athletes."
  },
  {
    "id": "SF2-SP-019",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Coach-Athlete Relationship",
    "cognitiveLevel": "Application",
    "text": "A professional female tennis player and her strength coach both describe deep mutual trust and respect, and both intend to continue working together through the next Olympic cycle. Nonetheless, sessions are tense: the coach expects to lead the session and direct exercise order, while the athlete expects to co-drive the session and frequently changes the plan mid-workout, leaving each feeling the other is not behaving as they should. Within the 3+1 Cs model of the coach-athlete relationship, which component is deficient?",
    "options": [
      {
        "letter": "A",
        "text": "Closeness"
      },
      {
        "letter": "B",
        "text": "Complementarity"
      },
      {
        "letter": "C",
        "text": "Commitment"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Complementarity refers to the corresponding and cooperative behaviors of coach and athlete, including reciprocal roles such as leading and being led, and the described conflict is precisely a breakdown in coordinated, mutually expected behavior. Option A is wrong because closeness describes the affective bond of trust, respect, and liking, which both parties explicitly report having. Option C is wrong because commitment refers to the intention to maintain the relationship over time, which both parties also explicitly report through the next Olympic cycle."
  },
  {
    "id": "SF2-SP-020",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Athlete Identity and Referral",
    "cognitiveLevel": "Analysis",
    "text": "A senior male collegiate soccer player tells his CSCS that being an athlete has been the most important part of his life and that he feels genuinely sad knowing his final season ends in eight weeks. He also describes an engineering internship he is excited about, a job offer he is weighing, and plans to keep playing in an adult league. He is training well, socializing normally, sleeping well, and reports no hopelessness. The most appropriate response is to:",
    "options": [
      {
        "letter": "A",
        "text": "Normalize the sadness as an expected anticipatory response to a major life transition, actively reinforce the non-sport roles and plans he is already developing, and remain alert for signs of distress that would warrant referral"
      },
      {
        "letter": "B",
        "text": "Refer him promptly to a licensed mental health professional for evaluation of athletic identity foreclosure, since he identifies strongly with his sport role"
      },
      {
        "letter": "C",
        "text": "Advise him to set aside thoughts about life after soccer until the season is over so that his competitive focus is not diluted"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A strong athletic identity is not pathological on its own; this athlete shows the protective features that predict good adjustment, namely a multidimensional identity, concrete post-sport plans, intact functioning, and no distress, so normalizing, reinforcing role exploration, and monitoring is correct. Option B is wrong because identity foreclosure is characterized by an exclusive athletic identity with no explored alternatives, which is the opposite of this athlete's profile; referring here misuses a clinical pathway and pathologizes a normal reaction. Option C is wrong because suppressing pre-retirement planning is exactly what predicts a harder transition, since planning and role exploration before exit are among the strongest protective factors."
  },
  {
    "id": "SF2-SP-021",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Career Transition",
    "cognitiveLevel": "Analysis",
    "text": "Two professional rugby players of similar age and career length begin training with the same CSCS after leaving the sport. Player 1 chose to retire on a planned timeline, completed a coaching qualification during his final two seasons, and speaks about several interests outside rugby. Player 2 was abruptly deselected without warning, has no post-sport plan, and states that rugby was \"the only thing I have ever been.\" Which statement best evaluates their likely transition experiences?",
    "options": [
      {
        "letter": "A",
        "text": "Player 2 should adjust more easily, because an involuntary exit removes the burden of the decision and therefore removes the regret that complicates voluntary retirement"
      },
      {
        "letter": "B",
        "text": "Their adjustment should be broadly similar, because quality of adjustment is determined mainly by career length and earnings rather than by the circumstances of the exit"
      },
      {
        "letter": "C",
        "text": "Player 2 is at substantially higher risk of a difficult transition because his exit was involuntary and unplanned and his athletic identity is exclusive, so the CSCS should watch for signs of distress and be prepared to refer while supporting his broader goals"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Research on retirement from sport consistently identifies involuntary, unanticipated exits, absence of pre-retirement planning, and an exclusive athletic identity as the strongest predictors of difficult adjustment, all three of which describe Player 2. Option A inverts the evidence: loss of control over the timing of exit is a risk factor, not a protective one. Option B is wrong because career length and earnings are far weaker predictors than the voluntariness of the exit, the degree of planning, and identity breadth, all of which clearly differ between these two athletes."
  },
  {
    "id": "SF2-SP-022",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Psychological Impact of Injury",
    "cognitiveLevel": "Analysis",
    "text": "Two collegiate basketball players sustain comparable ACL ruptures, undergo the same surgical procedure with the same surgeon, and follow the same rehabilitation protocol. Athlete 1 adheres closely to rehabilitation, reports steadily improving mood, and progresses on schedule. Athlete 2 misses sessions, expresses persistent doubt that rehabilitation will work, and reports isolation from teammates. Which statement best evaluates this divergence?",
    "options": [
      {
        "letter": "A",
        "text": "Athlete 2 is stuck in the denial stage and must be moved through the remaining grief stages in sequence before rehabilitation adherence can improve"
      },
      {
        "letter": "B",
        "text": "Integrated, appraisal-based models of injury response better explain the divergence: identical injuries produce different emotional and behavioral responses depending on the athlete's cognitive appraisal, self-efficacy, coping resources, and social support"
      },
      {
        "letter": "C",
        "text": "The difference is attributable to pain tolerance and tissue healing rate, since psychological responses follow from rehabilitation progress rather than influencing it"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The integrated model of psychological response to sport injury holds that personal and situational factors shape cognitive appraisal, which in turn drives emotional and behavioral responses such as adherence, which is why identical injuries and protocols can yield divergent trajectories. Option A relies on a fixed stage-sequence model that the evidence does not support; athletes do not reliably pass through uniform, ordered grief stages, and labeling Athlete 2 as stuck in denial substitutes a clinical-sounding diagnosis for the modifiable appraisal and support factors actually in play. Option C reverses the direction of influence and ignores the well-documented effect of appraisal, self-efficacy, and social support on rehabilitation behavior and outcome."
  },
  {
    "id": "SF2-SP-023",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Mental Health Signs and Symptoms",
    "cognitiveLevel": "Analysis",
    "text": "A collegiate rower reports discrete episodes of abrupt, intense fear that peak within a few minutes and include pounding palpitations, chest tightness, shortness of breath, dizziness, and a sense of unreality. The episodes have occurred at home and while sitting in class, not only before racing, and she now worries constantly about when the next one will happen. She has no prior cardiac history and has not been evaluated for these symptoms. The most appropriate action for the CSCS is to:",
    "options": [
      {
        "letter": "A",
        "text": "Teach diaphragmatic breathing and progressive muscular relaxation for pre-competition nerves and reassess her in a month"
      },
      {
        "letter": "B",
        "text": "Refer her to a licensed mental health professional for evaluation of panic disorder, since the presentation is clearly psychological in origin"
      },
      {
        "letter": "C",
        "text": "Refer her for medical evaluation to rule out cardiac, respiratory, and endocrine causes of the symptoms and, in parallel, to a licensed mental health professional for evaluation"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Palpitations, chest tightness, and dyspnea in a previously unevaluated athlete require medical assessment to exclude cardiac, respiratory, and endocrine causes, and the episodic fear with anticipatory worry simultaneously warrants mental health evaluation, so a coordinated dual referral is the safe and appropriate action. Option A is wrong on two counts: the episodes occur at rest and away from competition, so they are not pre-competition nerves, and delaying evaluation for a month leaves a potentially serious medical cause unexamined. Option B is wrong because concluding the symptoms are clearly psychological is a diagnostic judgment outside the CSCS scope of practice and risks missing a cardiac or metabolic cause of identical symptoms."
  },
  {
    "id": "SF2-SP-024",
    "section": "scientific-foundations",
    "domain": "Sport Psychology",
    "topic": "Overtraining and Referral",
    "cognitiveLevel": "Analysis",
    "text": "A collegiate swimmer presented eight weeks ago with declining performance, persistent fatigue, and mood disturbance, and the CSCS implemented a substantially reduced training load consistent with suspected overtraining syndrome. Her performance and mood have not improved. She now reports feeling worthless and guilty about \"letting everyone down\" in areas of her life unrelated to swimming, has stopped seeing friends, and describes losing interest in things she used to enjoy outside the pool. She denies thoughts of self-harm. The most appropriate course of action is to:",
    "options": [
      {
        "letter": "A",
        "text": "Refer her to the team physician and to a licensed mental health professional for evaluation, while maintaining a substantially reduced training load"
      },
      {
        "letter": "B",
        "text": "Extend the unloading block another 4 to 6 weeks before taking further action, since full recovery from overtraining syndrome commonly requires months"
      },
      {
        "letter": "C",
        "text": "Reintroduce moderate-intensity training now, since eight weeks of markedly reduced load has produced detraining that is the more likely explanation for her continued performance decline"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Symptoms that fail to respond to appropriate load reduction and that have generalized beyond sport, including worthlessness, guilt, social withdrawal, and anhedonia in non-sport domains, exceed the profile of overtraining syndrome and require both medical evaluation (to assess for causes such as anemia, thyroid dysfunction, or infection) and mental health evaluation, neither of which a CSCS can perform. Option B is superficially attractive because prolonged recovery is genuinely characteristic of overtraining syndrome, but it ignores the non-sport depressive features and delays evaluation by another month and a half. Option C is wrong because it reframes a worsening biopsychosocial picture as a training-status problem and increases load on an athlete showing significant psychological warning signs."
  },
  {
    "id": "SF2-NU-001",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Scope of Practice",
    "cognitiveLevel": "Analysis",
    "text": "A collegiate volleyball player has just been diagnosed with celiac disease by her team physician and has been given a gluten-free therapeutic diet by the athletics department's registered dietitian. She asks her CSCS to help her figure out what to eat before and after practice so she does not run out of energy in the third set. Which response best reflects the boundaries of the CSCS's scope of practice?",
    "options": [
      {
        "letter": "A",
        "text": "Provide general education on carbohydrate and fluid timing around training using foods already approved within the dietitian's plan, and direct any changes to the therapeutic gluten-free prescription itself back to the dietitian"
      },
      {
        "letter": "B",
        "text": "Build out the athlete's full gluten-free daily menu with specific foods and portions, since eliminating a food is a dietary choice rather than a medical treatment"
      },
      {
        "letter": "C",
        "text": "Decline to discuss food with the athlete at all and route every nutrition-related question, including pre-practice fueling timing, back to the dietitian"
      }
    ],
    "correctAnswer": "A",
    "explanation": "General, evidence-based guidance on nutrient timing around training is squarely within the CSCS's scope, and working inside the boundaries the dietitian has already set respects the therapeutic prescription while still serving the athlete. Option B is incorrect because a gluten-free diet for diagnosed celiac disease is medical nutrition therapy for a diagnosed disease, and constructing or modifying that prescription is the registered dietitian's role regardless of whether medication is involved. Option C is incorrect because it over-corrects: refusing all nutrition conversation abandons a legitimate professional responsibility, since performance-oriented fueling and hydration education does not require dietetic licensure."
  },
  {
    "id": "SF2-NU-002",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Scope of Practice",
    "cognitiveLevel": "Application",
    "text": "A CSCS in private practice works in a state with dietetics licensure statutes. A healthy 26-year-old recreational client with no diagnosed medical conditions asks for a written, individualized daily meal plan specifying exact foods, portions, and calorie/macronutrient targets to support a lean-mass gain phase. What is the most appropriate action?",
    "options": [
      {
        "letter": "A",
        "text": "Write and deliver the individualized meal plan, because the client is healthy and has no diagnosed condition requiring medical nutrition therapy"
      },
      {
        "letter": "B",
        "text": "Decline all nutrition involvement and refer the client to a physician, since any discussion of calorie or macronutrient content constitutes practicing dietetics"
      },
      {
        "letter": "C",
        "text": "Provide general education on establishing a modest energy surplus, daily protein targets, and food-group examples, and refer the client to a registered dietitian or licensed nutrition professional for the individualized prescribed meal plan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The distinction that governs this case is general nutrition information versus individualized dietary prescription: the CSCS may deliver the former, but writing a prescribed individualized meal plan is a regulated act reserved for licensed nutrition professionals in states with dietetics licensure. Option A is incorrect because the client's healthy status does not create an exemption; licensure statutes restrict the act of individualized diet prescription itself, not merely the treatment of disease. Option B is incorrect because it misstates the boundary in the other direction, as general education about energy balance, protein needs, and food selection is explicitly within the CSCS's scope and does not require referral to a physician."
  },
  {
    "id": "SF2-NU-003",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Alcohol & Drugs",
    "cognitiveLevel": "Analysis",
    "text": "A rugby player finishes a match and, over the following 8 hours, consumes alcohol along with a carbohydrate and protein intake that meets his prescribed recovery targets. He argues that because he still hit his carbohydrate and protein numbers, the alcohol is harmless. Which analysis of the underlying physiology is most accurate?",
    "options": [
      {
        "letter": "A",
        "text": "Alcohol's dominant effect is direct blockade of GLUT4-mediated glucose uptake, so muscle glycogen resynthesis is severely impaired even when carbohydrate intake is fully adequate"
      },
      {
        "letter": "B",
        "text": "The impairment of glycogen resynthesis is largely indirect, driven by displacement of carbohydrate-rich food and fluid and by disrupted recovery behavior, whereas the muscle protein synthetic response is suppressed even when adequate protein is co-ingested with the alcohol"
      },
      {
        "letter": "C",
        "text": "Co-ingesting protein with alcohol fully preserves the muscle protein synthetic response, so the primary residual concern is the delayed rehydration caused by alcohol's diuretic effect"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Research in which carbohydrate intake was matched shows that most of alcohol's effect on glycogen restoration comes from displacing carbohydrate intake and derailing recovery behavior, while post-exercise muscle protein synthesis is directly blunted even when protein is co-ingested alongside the alcohol. Option A is incorrect because the direct metabolic impairment of glucose uptake and glycogen storage is comparatively modest when carbohydrate intake is held adequate, so it is not the dominant mechanism. Option C is incorrect because it is precisely the claim the evidence refutes: co-ingested protein does not rescue the protein synthetic response, so the athlete's argument fails even though diuresis and rehydration are also legitimate concerns."
  },
  {
    "id": "SF2-NU-004",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Alcohol & Drugs",
    "cognitiveLevel": "Application",
    "text": "An NCAA Division I soccer player privately tells her CSCS that she has taken a physician-prescribed amphetamine salt medication for ADHD since high school, and she is worried about being selected for a year-round drug test. What is the most appropriate action for the CSCS?",
    "options": [
      {
        "letter": "A",
        "text": "Reassure her that holding a valid physician's prescription automatically exempts a prescribed medication from a positive finding, so no further action is needed"
      },
      {
        "letter": "B",
        "text": "Direct her to the team physician and sports medicine/compliance staff to confirm that the required medical exception documentation is on file before she is tested, since stimulants are a banned drug class"
      },
      {
        "letter": "C",
        "text": "Advise her to stop taking the medication for the duration of the competitive season so that a positive stimulant finding cannot occur"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Stimulants are a banned class, and protection comes not from the prescription itself but from properly filed medical exception documentation held by the institution, so routing the athlete to the team physician and compliance staff is both correct and within the CSCS's scope. Option A is incorrect because possessing a prescription does not by itself resolve a positive finding; the supporting documentation must be on file and defensible in advance of testing. Option C is incorrect and potentially harmful, because advising an athlete to discontinue a physician-prescribed medication is practicing medicine and falls well outside the CSCS's scope of practice."
  },
  {
    "id": "SF2-NU-005",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Carbohydrate Needs",
    "cognitiveLevel": "Application",
    "text": "A 68-kg (150-lb) athlete is preparing for a mountain bike ultra-endurance race expected to last about 6 hours at moderate intensity. She has trained her gut and tolerates aggressive feeding. To maximize exogenous carbohydrate oxidation during the event, which in-race fueling target is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "About 30 g of carbohydrate per hour from a glucose/maltodextrin drink"
      },
      {
        "letter": "B",
        "text": "About 60 g of carbohydrate per hour from a glucose/maltodextrin drink"
      },
      {
        "letter": "C",
        "text": "About 90 g of carbohydrate per hour from a product combining glucose and fructose"
      }
    ],
    "correctAnswer": "C",
    "explanation": "For events exceeding roughly 2.5 to 3 hours, intakes up to about 90 g/h are recommended, but that rate is only achievable because glucose and fructose use separate intestinal transporters, allowing total absorption to exceed the ceiling imposed by any single transporter. Option B is incorrect because glucose-only formulations saturate the SGLT1 transporter at roughly 60 g/h, so adding volume of a single-source product past that point yields no additional oxidation and increases gastrointestinal distress. Option A is incorrect because roughly 30 g/h is the target for shorter efforts of about 1 to 2 hours and would substantially under-fuel a 6-hour race in an athlete who has already developed gut tolerance."
  },
  {
    "id": "SF2-NU-006",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Body Composition",
    "cognitiveLevel": "Analysis",
    "text": "A CSCS tracks a 90-kg linebacker across an 8-week off-season block using a 7-site skinfold equation. The estimate moves from 14.8% to 13.3% body fat, and the coach wants to conclude the block was successful. Which appraisal of this data is most defensible?",
    "options": [
      {
        "letter": "A",
        "text": "Bioelectrical impedance analysis should be used instead for these repeat measures, because it is fast and its estimates are not meaningfully influenced by acute hydration status"
      },
      {
        "letter": "B",
        "text": "The standard error of estimate for skinfold-derived body fat is roughly 3 to 4 percentage points, so a 1.5-point change sits within measurement error; tracking the raw sum of skinfolds under standardized conditions with the same technician is a more defensible indicator of change"
      },
      {
        "letter": "C",
        "text": "Hydrostatic weighing should be used to confirm the result, because it measures fat mass directly and therefore carries essentially no measurement error"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Skinfold prediction equations carry a standard error of estimate on the order of 3 to 4 percentage points of body fat, so a 1.5-point shift cannot be distinguished from noise; the raw skinfold sum avoids the added error introduced by the prediction equation and is the more sensitive tracking variable when technique and conditions are standardized. Option A is incorrect because bioelectrical impedance is highly sensitive to hydration status, recent exercise, and food and fluid intake, making it a poorer, not better, choice for detecting small serial changes. Option C is incorrect because hydrostatic weighing measures whole-body density rather than fat mass directly and relies on assumed constant densities for fat-free mass, leaving it with its own standard error of roughly 2.7 percentage points."
  },
  {
    "id": "SF2-NU-007",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Energy Balance",
    "cognitiveLevel": "Analysis",
    "text": "A 58-kg female distance runner is assessed at 18% body fat. Her intake is estimated at 2,300 kcal/day and her exercise energy expenditure at 900 kcal/day. Using the standard energy availability calculation, which value and interpretation are correct?",
    "options": [
      {
        "letter": "A",
        "text": "About 40 kcal/kg fat-free mass per day, which sits within the range generally considered to support optimal physiological function"
      },
      {
        "letter": "B",
        "text": "About 29 kcal/kg fat-free mass per day, which falls below the threshold commonly used to define low energy availability"
      },
      {
        "letter": "C",
        "text": "About 24 kcal/kg fat-free mass per day, which falls below the threshold commonly used to define low energy availability"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Energy availability equals energy intake minus exercise energy expenditure, divided by fat-free mass: her fat-free mass is 58 x 0.82 = 47.6 kg, and (2,300 - 900) / 47.6 gives about 29 kcal/kg FFM/day, just under the roughly 30 kcal/kg FFM threshold associated with low energy availability and RED-S risk. Option A is incorrect because it results from dividing total intake by total body mass without first subtracting exercise energy expenditure (2,300 / 58), which inflates the value and would wrongly reassure the practitioner. Option C is incorrect because it results from dividing the correct 1,400 kcal energy balance by total body mass (58 kg) rather than fat-free mass, understating availability even though it happens to land on the same qualitative conclusion."
  },
  {
    "id": "SF2-NU-008",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Hydration",
    "cognitiveLevel": "Application",
    "text": "To individualize a fluid plan, a CSCS measures a lacrosse midfielder before and after a 2-hour practice in warm conditions. Pre-practice body mass is 82.0 kg and post-practice body mass is 80.6 kg. During practice he drank 1.2 L of fluid and did not urinate. What is his approximate sweat rate?",
    "options": [
      {
        "letter": "A",
        "text": "About 1.3 L per hour"
      },
      {
        "letter": "B",
        "text": "About 0.7 L per hour"
      },
      {
        "letter": "C",
        "text": "About 2.6 L per hour"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Sweat rate equals body mass change plus fluid consumed minus urine losses, divided by exercise duration: he lost 1.4 kg of mass despite drinking 1.2 L, so total sweat loss was 2.6 L, and dividing by 2 hours gives about 1.3 L/h. Option B is incorrect because it uses only the 1.4 kg net mass change and ignores the 1.2 L he replaced during the session, which underestimates true sweat production by nearly half. Option C is incorrect because it reports the total 2.6 L lost across the entire practice rather than expressing it as a per-hour rate."
  },
  {
    "id": "SF2-NU-009",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Macronutrients",
    "cognitiveLevel": "Analysis",
    "text": "A 60-kg collegiate gymnast tells her CSCS she has cut dietary fat to about 18 g/day within a 2,000 kcal intake (roughly 8% of energy) to lean out, while keeping carbohydrate and protein targets intact. Which appraisal of this strategy is most accurate?",
    "options": [
      {
        "letter": "A",
        "text": "Sustained fat intake below roughly 20% of total energy is not recommended for athletes, because it compromises essential fatty acid intake and the absorption of fat-soluble vitamins and limits intramuscular triglyceride replenishment"
      },
      {
        "letter": "B",
        "text": "Because fat contributes little fuel during the short, high-intensity efforts of gymnastics, driving fat as low as tolerated is an efficient way to create the energy deficit as long as carbohydrate and protein targets are met"
      },
      {
        "letter": "C",
        "text": "The only meaningful concern at this intake is a blunted anabolic hormone response, since fat-soluble vitamin and essential fatty acid status are unaffected by dietary fat intake given the body's existing tissue stores"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Sports nutrition guidance advises athletes not to sustain fat intakes below about 20% of total energy, because dietary fat supplies essential fatty acids, is required for absorption of the fat-soluble vitamins A, D, E, and K, and supports replenishment of intramuscular triglyceride used during training. Option B is incorrect because the deficit can be created without eliminating a macronutrient that carries essential functions, and fat restriction of this severity in a female athlete also raises energy availability and endocrine concerns unrelated to fuel selection. Option C is incorrect because it dismisses a real problem: fat-soluble vitamin absorption depends on the presence of dietary fat at the time of ingestion, and essential fatty acids are by definition not synthesized endogenously, so existing stores do not make intake irrelevant."
  },
  {
    "id": "SF2-NU-010",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Protein Needs",
    "cognitiveLevel": "Application",
    "text": "An 82-kg (181-lb) wrestler is entering a 5-week sustained energy deficit while continuing hard resistance and conditioning work, and his primary goal is to preserve lean mass through the cut. Based on evidence-based guidance for athletes in energy restriction, what daily protein target is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "About 115 g per day"
      },
      {
        "letter": "B",
        "text": "About 180 g per day"
      },
      {
        "letter": "C",
        "text": "About 290 g per day"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Protein requirements shift toward the upper end of the athletic range during energy restriction to protect lean mass, and roughly 2.2 g/kg for an 82-kg athlete yields about 180 g/day. Option A is incorrect because approximately 115 g reflects about 1.4 g/kg, the lower end of the range that is adequate only when the athlete is in energy balance and not defending lean mass against a deficit. Option C is incorrect because approximately 290 g is about 3.5 g/kg, which exceeds evidence-based recommendations, confers no additional lean-mass protection, and displaces carbohydrate needed to sustain training quality in an already restricted intake."
  },
  {
    "id": "SF2-NU-011",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Supplement Dosing",
    "cognitiveLevel": "Application",
    "text": "A 70-kg 400-m sprinter wants to use beta-alanine to raise muscle carnosine content ahead of a championship meet 8 weeks away. He tried a single 3 g dose and stopped because of uncomfortable skin tingling. Which dosing protocol is most consistent with evidence-based guidelines?",
    "options": [
      {
        "letter": "A",
        "text": "4 to 6 g per day split into roughly four doses of 1.0 to 1.5 g taken with meals, continued for at least 4 weeks"
      },
      {
        "letter": "B",
        "text": "A single 6 g dose taken about 60 minutes before each training session and before competition"
      },
      {
        "letter": "C",
        "text": "20 g per day in divided doses for 5 to 7 days, then 3 to 5 g per day for maintenance"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Muscle carnosine loading depends on chronic cumulative beta-alanine intake, so 4 to 6 g/day sustained for 4 or more weeks is required, and splitting it into smaller doses taken with food is the standard way to minimize the paresthesia this athlete experienced. Option B is incorrect because beta-alanine has no meaningful acute ergogenic effect; a single pre-session dose is a caffeine-style timing strategy misapplied to a supplement that works only through gradual tissue saturation. Option C is incorrect because it applies the creatine monohydrate loading-and-maintenance model to beta-alanine, and a 20 g daily bolus would provoke severe paresthesia while offering no faster carnosine accrual."
  },
  {
    "id": "SF2-NU-012",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Supplement Regulation",
    "cognitiveLevel": "Recall",
    "text": "Under the Dietary Supplement Health and Education Act (DSHEA), which statement most accurately describes the FDA's authority over a dietary supplement that is already being sold in the United States?",
    "options": [
      {
        "letter": "A",
        "text": "The burden falls on the FDA to demonstrate that a marketed product is adulterated or unsafe before it can restrict or remove that product from the market"
      },
      {
        "letter": "B",
        "text": "The FDA may act against a marketed product only after the manufacturer submits safety data as part of a mandatory annual product license renewal"
      },
      {
        "letter": "C",
        "text": "The manufacturer must submit evidence of both safety and efficacy to the FDA for approval before the product may be sold, as with over-the-counter drugs"
      }
    ],
    "correctAnswer": "A",
    "explanation": "DSHEA places supplements in a food-like category and shifts the burden of proof to the FDA, which must establish that a marketed product is adulterated or presents a significant risk before taking enforcement action, a post-market posture that leaves athletes exposed to products with undisclosed or contaminated ingredients. Option B is incorrect because no annual product licensing or renewal system exists for dietary supplements in the United States. Option C is incorrect because it describes premarket approval, which DSHEA specifically does not require; that absence of premarket safety and efficacy review is the reason third-party certification programs exist."
  },
  {
    "id": "SF2-NU-013",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Supplement Safety",
    "cognitiveLevel": "Analysis",
    "text": "A drug-tested athlete shows her CSCS a pre-workout product whose label lists higenamine and Acacia rigidula extract, and notes that the marketing calls the formula 'all natural and plant-derived.' Which appraisal is most accurate?",
    "options": [
      {
        "letter": "A",
        "text": "Because both ingredients are botanical in origin, they fall outside anti-doping rules, which prohibit synthetic stimulants rather than plant-derived compounds"
      },
      {
        "letter": "B",
        "text": "The product is acceptable provided she discontinues it at least 72 hours before any scheduled test, since these stimulants clear rapidly and are prohibited only in competition"
      },
      {
        "letter": "C",
        "text": "She should stop using the product: higenamine appears on the prohibited list, and products marketed with Acacia rigidula extract have been found to contain undeclared amphetamine-like stimulants; under strict liability she is accountable for any prohibited substance in her sample regardless of intent or labeling"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Higenamine is a prohibited substance, analyses of Acacia rigidula products have identified undeclared amphetamine-like compounds such as BMPEA, and the strict liability principle means the athlete bears responsibility for whatever is found in her sample even if the label misled her, so discontinuation is the only defensible recommendation. Option A is incorrect because botanical origin has no bearing on prohibited status; anti-doping lists are organized by pharmacological action, and many prohibited compounds are plant-derived. Option B is incorrect on two counts: it gambles on unverified clearance kinetics for compounds whose actual content is unknown because they are undeclared, and it ignores that testing programs conduct year-round out-of-competition collection."
  },
  {
    "id": "SF2-NU-014",
    "section": "scientific-foundations",
    "domain": "Nutrition",
    "topic": "Third-Party Testing",
    "cognitiveLevel": "Analysis",
    "text": "A CSCS is helping a drug-tested athlete compare four protein powders whose labels carry, respectively, NSF Certified for Sport, the general NSF contents-certified mark, USP Verified, and a 'manufactured in a GMP-registered facility' statement. Which analysis is most accurate?",
    "options": [
      {
        "letter": "A",
        "text": "The general NSF contents-certified mark provides the same protection as NSF Certified for Sport, because both are awarded by the same certifying body under the same testing standard"
      },
      {
        "letter": "B",
        "text": "Because certification programs screen product lots, a certified product carries a guarantee against a positive test and shifts responsibility for an adverse analytical finding from the athlete to the manufacturer"
      },
      {
        "letter": "C",
        "text": "Programs such as NSF Certified for Sport and Informed Sport are the appropriate choice because they specifically screen finished product lots for substances banned in sport, whereas USP Verified and GMP registration address label accuracy, purity, and manufacturing consistency without including a banned-substance screen"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Only the sport-specific programs add lot-level screening against banned-substance panels on top of identity and contaminant testing; USP Verified confirms ingredient identity, potency, and freedom from specified contaminants, and GMP registration speaks to manufacturing process control, so neither addresses doping risk. Option A is incorrect because NSF's general dietary supplement certification verifies label claims and screens for contaminants such as heavy metals but does not include the banned-substance panel that distinguishes Certified for Sport. Option B is incorrect because certification meaningfully reduces but never eliminates risk, and the strict liability principle keeps responsibility for an adverse analytical finding with the athlete regardless of any certification the product carries."
  }
];
