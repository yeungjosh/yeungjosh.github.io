import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function OptimizerRobustnessPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <Button asChild variant="ghost" size="sm">
            <Link href="/#projects" className="flex items-center gap-2 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Beyond Accuracy: Why Your Optimizer Choice Matters for Real-World ML Deployment
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 italic mb-8 leading-relaxed max-w-3xl mx-auto">
            A deep dive into how training algorithms affect neural network robustness to noisy inputs
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-base text-slate-600 dark:text-slate-400 mb-4">
            <span className="font-semibold">Josh Yeung</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span>UC Berkeley RISELab</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span>2021</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Research conducted at <Link href="https://rise.cs.berkeley.edu/" target="_blank" className="text-green-600 dark:text-violet-400 hover:underline font-medium">Berkeley RISELab</Link> under the supervision of <Link href="https://www.stat.berkeley.edu/~mmahoney/" target="_blank" className="text-green-600 dark:text-violet-400 hover:underline font-medium">Prof. Michael Mahoney</Link> and <Link href="https://www.benerichson.com/" target="_blank" className="text-green-600 dark:text-violet-400 hover:underline font-medium">Ben Erichson</Link>
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none
                      prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                      prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
                      prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
                      prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                      prose-a:text-green-600 dark:prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-semibold
                      prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-li:my-2
                      prose-ul:my-6 prose-ol:my-6">

          <h2>The Hidden Cost of Optimizer Selection</h2>
          <p>
            You&apos;ve trained your neural network. It achieves 99% accuracy on your test set. Champagne corks pop, the model ships to production, and then... it fails catastrophically when users upload slightly blurry images, or sensor data arrives with a bit of noise.
          </p>

          <p>
            This scenario plays out more often than we&apos;d like to admit. While the machine learning community obsesses over squeezing out those final percentage points of accuracy, we often overlook a critical question: <strong>How well does our model handle the messy, imperfect data it will inevitably encounter in the real world?</strong>
          </p>

          <p>
            What&apos;s even more surprising? The optimizer you choose during training—SGD, Adam, AdaHessian—doesn&apos;t just affect how fast your model trains or its final accuracy. <strong>It fundamentally changes how robust your model is to input perturbations.</strong>
          </p>

          <p>
            In this post, I&apos;ll share findings from my research comparing five popular optimization algorithms (SGD, Adam, Adadelta, AdaHessian, and Frank-Wolfe) and their impact on model robustness. Spoiler alert: the differences are dramatic.
          </p>

          <h2>The Setup: A Controlled Robustness Experiment</h2>

          <h3>The Question</h3>
          <p>
            If we train identical neural network architectures with different optimizers, will they show different levels of robustness to corrupted inputs?
          </p>

          <h3>The Approach</h3>
          <p>I designed a systematic experiment to isolate the effect of optimizer choice:</p>

          <p><strong>1. Model Architecture:</strong> ResNet-20 for CIFAR-10 and ResNet-18 for MNIST</p>
          <ul>
            <li>Same architecture across all experiments</li>
            <li>Same initialization strategy (Kaiming normal)</li>
            <li>Same basic hyperparameters (weight decay: 5e-4, L2 reg: 3e-4)</li>
          </ul>

          <p><strong>2. Optimizers Tested:</strong></p>
          <ul>
            <li><strong>SGD</strong> - The classic stochastic gradient descent with momentum</li>
            <li><strong>Adam</strong> - Adaptive learning rates with momentum</li>
            <li><strong>Adadelta</strong> - Parameter-specific adaptive learning rates</li>
            <li><strong>AdaHessian</strong> - Second-order optimizer using Hessian information</li>
            <li><strong>Frank-Wolfe</strong> - Constrained optimization algorithm</li>
          </ul>

          <p><strong>3. Training Protocol:</strong></p>
          <ul>
            <li>110 epochs with learning rate decay at epochs [30, 60, 90]</li>
            <li>Save the best model based on validation accuracy</li>
            <li>Ensure all models achieve comparable clean accuracy (~99%)</li>
          </ul>

          <p><strong>4. Perturbation Testing:</strong></p>
          <p>Once training completed, I subjected each model to two types of noise:</p>
          <ul>
            <li><strong>Salt-and-Pepper Noise:</strong> Randomly corrupt pixels by setting them to 0 or 1
              <ul>
                <li>Test range: 0% to 30% pixel corruption</li>
                <li>Simulates sensor malfunctions, transmission errors</li>
              </ul>
            </li>
            <li><strong>Gaussian Noise:</strong> Add random Gaussian noise to inputs
              <ul>
                <li>Test range: σ from 0.0 to 4.0</li>
                <li>Simulates measurement noise, environmental factors</li>
              </ul>
            </li>
          </ul>

          <p>For each noise level, I measured test set accuracy and tracked how performance degraded.</p>

          <h2>The Results: Optimizer Choice Matters—A Lot</h2>

          <div className="not-prose my-12 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
            <Image
              src="/optimizer-robustness.png"
              alt="Robustness comparison showing test accuracy vs salt-and-pepper noise intensity for SGD, Adadelta, and Adam optimizers"
              width={800}
              height={600}
              className="w-full h-auto rounded-xl"
            />
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-6 italic leading-relaxed">
              Test accuracy vs. salt-and-pepper noise intensity for models trained with different optimizers.
            </p>
          </div>

          <h3>What the Data Shows</h3>
          <p>The graph tells a striking story:</p>

          <div className="not-prose my-8 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg space-y-4">
            <div>
              <p className="font-semibold text-slate-900 dark:text-white mb-2">At 0% noise (clean data):</p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>• All three models perform similarly (~99% accuracy)</li>
                <li>• Standard benchmarking wouldn&apos;t reveal any meaningful difference</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-slate-900 dark:text-white mb-2">At 10% noise corruption:</p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>• <strong>Adam:</strong> ~85% accuracy (14% degradation)</li>
                <li>• <strong>Adadelta:</strong> ~75% accuracy (24% degradation)</li>
                <li>• <strong>SGD:</strong> ~65% accuracy (34% degradation)</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-slate-900 dark:text-white mb-2">At 20% noise corruption:</p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                <li>• <strong>Adam:</strong> ~60% accuracy</li>
                <li>• <strong>Adadelta:</strong> ~40% accuracy</li>
                <li>• <strong>SGD:</strong> ~25% accuracy</li>
              </ul>
            </div>
          </div>

          <p>
            <strong>The key insight:</strong> Adam-trained models maintain <strong>2.4x higher accuracy</strong> than SGD-trained models at 20% corruption. That&apos;s not a marginal improvement—it&apos;s the difference between a usable system and a failed deployment.
          </p>

          <h2>Why Does This Happen?</h2>
          <p>The robustness differences stem from how each optimizer navigates the loss landscape during training:</p>

          <h3>SGD: Fast but Brittle</h3>
          <p>SGD uses a fixed learning rate (with momentum) for all parameters. While this simplicity makes it easy to tune, it means:</p>
          <ul>
            <li>All parameters update at the same scale</li>
            <li>The model converges to sharp minima in the loss landscape</li>
            <li>Sharp minima = high sensitivity to input perturbations</li>
            <li>Small changes in input → large changes in output</li>
          </ul>

          <h3>Adam: Adaptive and Robust</h3>
          <p>Adam maintains per-parameter adaptive learning rates based on first and second moments of gradients. This leads to:</p>
          <ul>
            <li><strong>Adaptive updates:</strong> Parameters with sparse gradients get larger updates</li>
            <li><strong>Smoother convergence:</strong> The model finds flatter minima</li>
            <li><strong>Flat minima = robustness:</strong> Small input perturbations don&apos;t drastically change activations</li>
            <li><strong>Better feature learning:</strong> The model learns representations that generalize across noise levels</li>
          </ul>

          <p>
            Think of it like this: SGD finds a sharp mountain peak (precise but unstable), while Adam finds a broad plateau (slightly less precise but much more stable).
          </p>

          <h3>Adadelta: Middle Ground</h3>
          <p>
            Adadelta adapts learning rates without requiring manual tuning, placing it between SGD and Adam in terms of robustness. It lacks Adam&apos;s momentum component, which may explain its intermediate performance.
          </p>

          <h2>Real-World Implications</h2>
          <p>This research isn&apos;t just academic—it has direct implications for production ML systems:</p>

          <h3>1. Medical Imaging</h3>
          <p>In medical diagnostics, images often suffer from:</p>
          <ul>
            <li>Sensor noise from older equipment</li>
            <li>Compression artifacts from PACS systems</li>
            <li>Motion blur from patient movement</li>
          </ul>
          <p>A 30% improvement in robustness could mean the difference between accurate diagnosis and misclassification.</p>

          <h3>2. Autonomous Vehicles</h3>
          <p>Self-driving cars must handle:</p>
          <ul>
            <li>Rain, fog, and snow affecting camera inputs</li>
            <li>Dirt and scratches on sensors</li>
            <li>Glare and lighting variations</li>
          </ul>
          <p>More robust models = safer autonomous systems.</p>

          <h3>3. Edge Deployment</h3>
          <p>When deploying to mobile devices or IoT sensors:</p>
          <ul>
            <li>Aggressive image compression saves bandwidth</li>
            <li>Limited compute forces model quantization</li>
            <li>Environmental factors introduce noise</li>
          </ul>
          <p>Choosing Adam over SGD might eliminate the need for expensive noise-reduction preprocessing.</p>

          <h3>4. Adversarial Robustness</h3>
          <p>
            While this work focuses on random noise, the principles extend to adversarial examples. Models trained with adaptive optimizers show some inherent resistance to small adversarial perturbations.
          </p>

          <h2>Practical Recommendations</h2>

          <h3>For Production ML Engineers:</h3>
          <ol>
            <li><strong>Don&apos;t optimize solely for test accuracy</strong> - Evaluate robustness to realistic noise</li>
            <li><strong>Consider Adam as default</strong> - Unless you have specific reasons to use SGD</li>
            <li><strong>Test with corrupted inputs</strong> - Add salt-and-pepper/Gaussian noise to your test suite</li>
            <li><strong>Budget for robustness</strong> - The training time difference is marginal compared to the robustness gain</li>
          </ol>

          <h3>For ML Researchers:</h3>
          <ol>
            <li><strong>Report robustness metrics</strong> - Not just accuracy on clean test sets</li>
            <li><strong>Benchmark across optimizers</strong> - Don&apos;t assume optimizer choice is neutral</li>
            <li><strong>Investigate minima sharpness</strong> - Use tools like loss landscape visualization</li>
            <li><strong>Consider second-order methods</strong> - AdaHessian and others deserve more attention</li>
          </ol>

          <h2>Conclusion</h2>
          <p>
            Machine learning model development doesn&apos;t end with hitting your accuracy target on a clean test set. The path from research prototype to production system requires considering robustness, reliability, and real-world performance degradation.
          </p>

          <p>
            This research demonstrates that <strong>optimizer selection is not just a training-time hyperparameter—it&apos;s a deployment-time decision</strong> that affects how your model behaves when things go wrong. And in production, things always go wrong.
          </p>

          <p>
            My experiments show that <strong>Adam-trained models maintain 2-3x better accuracy under realistic noise</strong> compared to SGD-trained models. That&apos;s not a small effect size—it&apos;s the difference between a system that works and a system that fails.
          </p>

          <p>
            As ML systems become more critical to real-world infrastructure—from healthcare to autonomous vehicles to industrial automation—we need to move beyond accuracy leaderboards and start optimizing for resilience.
          </p>

          <p>
            The next time you reach for SGD because &quot;that&apos;s what the paper used,&quot; remember: the optimizer you choose today determines how your model handles the messy, unpredictable world tomorrow.
          </p>

          <div className="not-prose my-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-10 rounded-2xl text-center border border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Code & Reproducibility</h3>
            <p className="mb-6 text-slate-700 dark:text-slate-300 text-lg">
              All code, trained models, and experimental notebooks are available on GitHub
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
              <Link href="https://github.com/yeungjosh/riselab" target="_blank">
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>

        <hr className="my-16 border-slate-200 dark:border-slate-700" />

        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">About the Research</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            This research was conducted at the <Link href="https://rise.cs.berkeley.edu/" target="_blank" className="text-green-600 dark:text-violet-400 hover:underline font-medium">Berkeley RISELab</Link> under the supervision of <Link href="https://www.stat.berkeley.edu/~mmahoney/" target="_blank" className="text-green-600 dark:text-violet-400 hover:underline font-medium">Professor Michael Mahoney</Link> and <Link href="https://www.benerichson.com/" target="_blank" className="text-green-600 dark:text-violet-400 hover:underline font-medium">Ben Erichson</Link>. The work investigates the gap between model accuracy and model reliability in real-world deployment scenarios.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            I assembled training scripts into a unified pipeline (resnet_training.py) and later assisted Geoffrey Negiar with Wandb sweep configuration for hyperparameter tuning of sparse models.
          </p>
        </div>
      </article>
    </div>
  );
}
